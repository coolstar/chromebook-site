<?php
	function recursiveRemove(string $path) {
		if (is_dir($path)) {
			foreach (scandir($path) as $entry) {
				if (!in_array($entry, ['.', '..'], true)) {
					recursiveRemove($path . DIRECTORY_SEPARATOR . $entry);
				}
			}
			rmdir($path);
		} else {
			unlink($path);
		}
	}

	$interval = (time() - filemtime("updated.txt"));
	echo "Time since last update: ".$interval."<br>\n";
	if ($interval < 300){
		die("<span style='color: red;'>Rate limiting. Please wait 1 minute and retry.</span>");
	}

	touch("updated.txt");

	$baseURL = "https://raw.githubusercontent.com/coolstar/chromebook-site/main/";
	$manifest = $baseURL."/manifest.json?rand=".mt_rand();
	$zipURL = "https://github.com/coolstar/chromebook-site/archive/refs/heads/main.zip?rand=".mt_rand();

	$blockedExtensions = [".php"];
	$blockedPaths = ["archive", "updater", "driverlicense", "windows-rwl", "rawimgs", "downloads"];

	echo "Downloading JSON...<br>\n";
	$rawJSON = file_get_contents($manifest);
	echo "Decoding JSON...<br>\n";
	$json = json_decode($rawJSON);

	var_dump($json);

	echo "<br>\n";

	$tempDir = tempnam(sys_get_temp_dir(), '');
	$tempZip = $tempDir.".zip";
	unlink($tempDir);

	echo "Downloading Zip...<br>\n";
	file_put_contents($tempZip, file_get_contents($zipURL));

	function deleteZip(){
		global $tempZip;
		unlink($tempZip);
	}

	register_shutdown_function("deleteZip");

	echo "Extracting Zip...<br>\n";

	mkdir($tempDir);

	function deleteTemp(){
		global $tempDir;
		recursiveRemove($tempDir);
	}
	register_shutdown_function("deleteTemp");

	$zip = new ZipArchive;
	if ($zip->open($tempZip)){
		$zip->extractTo($tempDir);
		$zip->close();
	} else {
		die("Unable to open zip!<br>\n");
	}

	echo "Extracted Zip..<br>\n";

	foreach ($json as $dir => $fileNames) {
		if (str_contains($dir, "/") || str_contains($dir, "\\")){
			continue;
		}
		$dir = strtolower($dir);
		if (in_array($dir, $blockedPaths)){
			echo "<span style='color: red;'>Skipping blocked Directory ".$dir."</span><br>\n";
			continue;
		}

		foreach ($fileNames as $key => $fileName) {
			if (str_contains($fileName, "/") || str_contains($fileName, "\\")){
				continue;
			}

			$ext = pathinfo($fileName, PATHINFO_EXTENSION);
			if (in_array($ext, $blockedExtensions)){
				echo "<span style='color: red;'>Skipping blocked Extension ".$fileName."</span><br>\n";
				continue;
			}
			echo $dir."/".$fileName."&nbsp;&nbsp;&nbsp;&nbsp;";

			$newFile = $tempDir."/chromebook-site-main/".$dir."/".$fileName;
			$serverFile = "../".$dir."/".$fileName;

			$update = false;

			if (file_exists($serverFile) && file_exists($newFile)){
				$newHash = hash_file("sha256", $newFile);
				if (hash_file("sha256", $serverFile) != $newHash){
					$update = true;
					echo "<span style='color: green;'>Updating</span> to new hash ".$newHash."<br>\n";
				} else {
					echo "<span style='color: green;'>Matches</span>. Skipping<br>\n";
				}
			} else if (file_exists($newFile)){
				$update = true;
				$newHash = hash_file("sha256", $newFile);
				echo "<span style='color: green;'>New</span> of hash ".$newHash."<br>\n";
			} else {
				echo "<span style='color: red;'>Warning: Not Found!</span><br>\n";
			}

			if ($update){
				copy($newFile, $serverFile);
			}
		}
	}
?>