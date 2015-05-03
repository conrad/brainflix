<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">

<html lang="en-us" style="min-width:320px;">
<head>

	<object id="plugin0" type="application/x-emotivlifesciences" width="0" height="0">
		<param name="onload" value="pluginLoaded" />
	</object>

    <title>Emotiv Control Panel</title>
    <meta name="Keywords" content="emotiv, emotivinsight"/>
    <meta name="Description" content="emotiv.co"/>
    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><!-- Jquery core Library -->

	<script type="text/javascript" src = "js/plugin/EdkDll.js"></script>
	<script type="text/javascript" src = "js/plugin/EmoState.js"></script>
	<script type="text/javascript" src = "js/plugin/EmoEngine.js"></script>

	<script src="js/jquery-1.10.1.min.js" type="text/javascript"></script>

	<script type="text/javascript" src="js/page/Calibration.js"></script>

    <script type="text/javascript">
	function ELSPlugin()
	{
		return document.getElementById('plugin0');
	}
	//check plugin is exist
	function checkPluginExits()
	{
		var L = navigator.plugins.length;
		for(var i = 0; i < L; i++)
		{
			console.log(
				navigator.plugins[i].name +
				" | " +
				navigator.plugins[i].filename +
				" | " +
				navigator.plugins[i].description +
				" | " +
				navigator.plugins[i].version +
				"<br>"
			);
			if(navigator.plugins[i].name=="EmotivLifeSciences")
			{
				return true;
				break;
			}
		}
		return false;
	}
	function pluginLoaded()
    {
		//Uncomment below script to arlet plugin loaded
        //alert("Plugin loaded!");
    }
	//if not exist or older version, notify to download
	window.onload=function()
	{
		if(!checkPluginExits())
		{
			var confirmDownload = confirm("Download plugin (Please restart your browser after install plugin)?");
			if (confirmDownload == true)
			{
				window.location.href=('download.php');
			}
		}
		else
		{
			<?php

			//load file xml
			$xml = simplexml_load_file("http://brainmetrics.emotivinsight.com/Download/version.xml") or die("Unable to load XML file.");

			foreach($xml->version as $version)

			?>
			if(version != "<?php echo $version->number;?>")
			{
				var confirmUpdate = confirm("Update New Version (Please restart your browser after install plugin)?");
				if (confirmUpdate == true)
				{
					window.location.href=('download.php');
				}
			}
		}
		init();
	};

	// main javascript
	var version = ELSPlugin().version;
	var sysTime;
	var wirelessSignal;
	var batteryPower;
	var isEngineConnect;
	var isConnected;
	var engine = EmoEngine.instance();
	var userIdProfile = 0;
	function init()
	{
		//for debug EdkDll function
		//EdkDll.DebugLog = true;
		AddValidLicenseDoneEvent();
		EdkDll.ELS_ValidLicense();
		sysTime = document.getElementById("txtInputTime");
		sysTime.value = "00.0000";
	}

	function AddValidLicenseDoneEvent()
	{
		EdkDll.addEvent(ELSPlugin(), 'valid', function(license){
			console.log("license");
			console.log(license);
			if(license.indexOf('"License":"EEG"') > -1) console.log("License is EEG License. You can get all data.");
			else if (license.indexOf('"License":"Non-EEG"') > -1) console.log("License is Non-EEG License. You can get all non-eeg data.");
			else console.log("The license is not valid. Please get valid license to get data");
			engine.Connect();
			updateEmoEngine();
        });
	}
	function updateEmoEngine()
	{
		try
		{
			engine.ProcessEvents(500);
			setTimeout("updateEmoEngine()",50);
			if (isConnected == true) StartEdk();
		}
		catch(e)
		{
			alert(e);
		}
	}
	// Handle UserAdded event
	$(document).bind("UserAdded",function(event,userId){
		isConnected = true;
		userIdProfile = userId;
		alert("Added User");
		btnAddClick1();
	});

	// Handle UserRemoved event
	$(document).bind("UserRemoved",function(event,userId){
		isConnected = false;
		alert("Removed User");
	});

	$(document).bind("EmoEngineErrorRemote",function(){
		isConnected = false;
		alert("Cannot connect to Composer - please make sure composer is open");
	});

	$(document).bind("EmoStateUpdated",function(event,userId,es){
		var getTime = es.GetTimeFromStart()
		var timefromStart = new String(getTime);
		var timeStart;
		if (getTime <10)
		{
			timeStart = timefromStart.substring(0,6);
		}
		else timeStart = timefromStart.substring(0,7);
		sysTime.value = timeStart;
		var wireSignal= es.GetWirelessSignalStatus();
		//throw wireSignal;
		var batteryArr = es.GetBatteryChargeLevel();
		loadBatteryQuality(batteryArr["chargeLevel"]);
		loadWirelessQuality(wireSignal);
	});

</script>

</head>

<body>

	 <div class="bottom_content">
		<input type="submit" name="strRecording" id="strRecording" value="Start Recording" onclick="strRecord();"/>
		<input type="submit" name="stpRecording" id="stpRecording" value="Stop Recording" onclick="stpRecord();"/>
	 </div>

</body>
</html>
