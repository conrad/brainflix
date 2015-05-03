		var chunk=0;
		var sampleNumber_EEG=0;
		var sampleNumber_ES=0;
		var eeg_file_path;
		var es_file_path;
		var checkInterval;
		var checkPost;
		var dem=0;
		var completed=false;
		var marker_open_start=false;
		var marker_open_end=false;
		var marker_close_start=false;
		var marker_close_end=false;
		var marker_record_start=false;
		var marker_record_end=false;
		var count=0;
		var post=false;
		var dataES = new Array;
		var dataEEG = new Array;
		var STT=0;
		var es;

		var timeCalibrationChange;
		var timeCalibrationNow = 0;
		var chart3;
		var chart4;
		var chart5, chart6, chart7;

		function checkindex(){
			if(dem==15){
				dem=1;
				chunk++;
			}
			else
				dem++;
			//console.log('partNumber:'+dem+'chunk:'+chunk);
		}
		function isEmail(email)
		{
			var isValid = false;
			var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(regex.test(email)) {
				isValid = true;
			}
			return isValid;
		}
		function btnAddClick1()
		{

			alert('Test connect cloud with "emotivtest@gmail.com" email');
		}
		function checkEvent(){checkInterval=setInterval(function(){
					EdkDll.EE_EngineGetNextEvent();
					EdkDll.EE_EmoEngineEventGetEmoState();
					es = new EmoState();

					if (es.ExpressivIsBlink()){
						alert("blink");
					}

					debugger
					//console.log("DEM="+dem);
					checkindex();
					//postData();
					// if(count==0){
					// 	dataEEG = new Array;
					// 	dataES = new Array;
					// }
					// if(count==8){
					// 	STT++;
					// 	// $.post("post.php",
					// 	//   {
					// 	// 	chunk		:chunk,
					// 	// 	stt			:STT,
					// 	// 	ESdata		:dataES,
					// 	// 	dataEEG 	:dataEEG,
					// 	// 	//dataES 		:dataES,
					// 	// 	partNumber	: dem,
					// 	//
					// 	// 	sample_EEG	:sampleNumber_EEG,
					// 	// 	sample_ES	:sampleNumber_ES
					// 	// 	},function( data ){
					// 	// 		//console.log(data);
					// 	// 	});
					// 	count=0;
					// }
					// else{

						count++;
						//console.log("count:"+count);
						var arrEEG;
						var arrES;
						EdkDll.EE_DataUpdateHandle(0);

						arrEEG 	= $.map(EdkDll.EE_DataGet(), function(value, index) {
							return [value];
						});
						sampleNumber_EEG+=arrEEG[0].length;
						arrES=$.map(EdkDll.ES_AffectivRawValueGet(), function(value, index) {
							return [value];
						});

						sampleNumber_ES+=1;
						//alert(sampleNumber_ES);
						if(arrEEG.length==0){
							alert('Khong co du lieu truyen vao');
							EdkDll.EE_DataUpdateHandle(0);
							arrEEG 	= $.map(EdkDll.EE_DataGet(), function(value, index) {
							return [value];
						});
						}
						// @dataEEG : array store data to export csv file form
						else{
							var arrayEEG = new Array(0,1,3,4,7,8,5,6,20,21,16,17,14,15,11,12);

								for(var j=0;j<arrEEG[0].length;j++){
									var dataEEGs=new Array;
									for(var i=0;i<arrayEEG.length;i++){
										var index=arrayEEG[i];
										//console.log(arrEEG[index]);
										dataEEGs.push([Math.floor(arrEEG[index][j])]);
									}
									if(dataEEGs.length!=16)
										console.error('Error');
									dataEEG.push(dataEEGs);
								}

							var dataESs=new Array;
							var arrayES=new Array(0,1,3);

							for(var i=0;i<arrayES.length;i++){
								var pos=arrayES[i];
								 var arrESr=$.map(arrES[pos], function(value, index) {
									return [value];
								});
								var arrayScale=new Array(2,1,0);
								for(var j=0;j<arrayScale.length;j++){
									//console.log(arrESr[possition]);
									var possition=arrayScale[i];
									//console.log(arrESr[possition]);
									dataESs.push([Math.floor(arrESr[possition])]);
								}

							}
							dataES.push(dataESs);
						}


        }, 500)};
	function unCheckEvent()
	{
		clearInterval(checkInterval);
	}

function strRecord(){
		marker_record_start=true;
		console.log("add marker record start");
		// $.post("post.php",
		// 			  {
		// 				record_start:marker_record_start,
		// 				sample_EEG	:sampleNumber_EEG,
		// 				sample_ES	:sampleNumber_ES
		//
		// 				});
		console.log('Record start EEG_sample:'+sampleNumber_EEG+', ES sample:'+sampleNumber_ES);
		checkEvent();
}
function stpRecord(){
//end record
		STT++;
		unCheckEvent();
		completed=true;
		marker_record_end=true;
		// $.post("post.php",
		// 			  {
		// 				stt			:STT,
		// 				completed	:completed,
		// 				record_end	:marker_record_end,
		// 				sample_EEG	:sampleNumber_EEG,
		// 				sample_ES	:sampleNumber_ES,
		// 				dataEEG 	:dataEEG,
		// 				ESdata 		:dataES,
		// 				chunk		:chunk
		// 				});
		console.log('Record end EEG_sample:'+sampleNumber_EEG+', ES sample:'+sampleNumber_ES);
		console.log('#################33');
}
		function StartEdk(){
		//----------------------------------------------------
			var enableDataAcqui = EdkDll.EE_DataAcquisitionEnable(0, true);
            EdkDll.EE_DataSetBufferSizeInSec(1);
		}
