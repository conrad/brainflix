/***
	Cloud Emotiv
*/



/**
 * Add event for firebreath
 * @param obj
 * @param name
 * @param func
 */
function ELSCloud()
{
    eObj = document.getElementById('ElsPlugin');
}

ELSCloud.eObj;
ELSCloud.DebugLog = false;

/**
 * Initializes the connection to ElsCloud server
 * @returns {true if successful, false if not}
 * @constructor
 */
ELSCloud.ELS_Connect = function()
{
	var Cloud_Connect = ELSPlugin().ELS_Cloud_Connect();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Connect()");
		console.log(Cloud_Connect);		
	}
    return Cloud_Connect;
};

/**
 * Login on ElsCloud with exist account
 * @param email:string
 * @param password:string
 * @param userId:int
 * @returns {int - userID in cloud if successful, else return 0}
 * @constructor
 */
ELSCloud.ELS_Login = function(email, password, userId)
{
	var Cloud_Login = ELSPlugin().ELS_Cloud_Login(email, password, userId);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Login("+email+","+password+","+userId+")");
		console.log(Cloud_Login);		
	}
    return Cloud_Login;
};

/**
 * Login to Cloud, callback elsLogin(with param is isLogin - true or false, userID-id in cloud) function if successful
 * @param email:string
 * @param password:string
 * @param userId:string
 * @param elsLogin:string-function want to call
 * @returns {bool - true call elsLogin function if successful}
 * @constructor
 */
ELSCloud.ELS_Do_Login = function(email, password, userId, elsLogin)
{
	var Cloud_Do_Login = ELSPlugin().ELS_Cloud_Do_Login(email, password, userId, elsLogin);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Do_Login("+email+","+password+","+userId+","+elsLogin+")");
		console.log(Cloud_Do_Login);		
	}
    return Cloud_Do_Login;
};

/**
 * Sign up new account on ElsCloud
 * @param firstname:string
 * @param lastname:string
 * @param email:string
 * @param password:string
 * @returns {bool - true if successful, false if not}
 * @constructor
 */
/* ELSCloud.ELS_Signup = function(firstname, lastname, email, password)
{
	var Signup = ELSPlugin().ELS_Cloud_Signup(firstname, lastname, email, password);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Signup("+firstname+","+lastname+","+email+","+password+")");
		console.log(Signup);		
	}
    return Signup;
} */

/**
 * Signup to Cloud, callback elsSignup (para isSignup - true or false) function if successful
 * @param firstname:string
 * @param lastname:string
 * @param email:string
 * @param password:string
 * @param elsSignup:string - function want to call
 * @returns {bool - true}
 * @constructor
 */
/* ELSCloud.ELS_Do_Signup = function(firstname, lastname, email, password, elsSignup)
{
	var Do_Signup = ELSPlugin().ELS_Cloud_Do_Signup(firstname, lastname, email, password, elsSignup);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Do_Signup("+firstname+","+lastname+","+email+","+password+")");
		console.log(Do_Signup);		
	}
    return Do_Signup;
}
 */
/**
 * Create new infomation of headset on ElsCloud
 * @param userID:int
 * @returns {bool - true if successful, false if not}
 * @constructor
 */
ELSCloud.ELS_CreateHeadset = function(userID)
{
	var CreateHeadset = ELSPlugin().ELS_Cloud_CreateHeadset(userID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_CreateHeadset("+userID+")");
		console.log(CreateHeadset);		
	}
    return CreateHeadset;
};

/**
 * Create new protocol on ElsCloud
 * @param name: string name of protocol
 * @param protocolID: receives number of protocol
 * @returns {int - id of protocol if successful, 0 if fail}
 * @constructor
 */
ELSCloud.ELS_CreateProtocol = function(name, protocolID)
{
	var CreateProtocol = ELSPlugin().ELS_Cloud_CreateProtocol(name, protocolID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_CreateProtocol("+name+","+protocolID+")");
		console.log(CreateProtocol);		
	}
    return CreateProtocol;
};

/**
 * Create subject in a protocol on ElsCloud
 * @param userID: id of user
 * @param protocolID: id of protocol
 * @returns {bool - true if successful, false if not}
 * @constructor
 */
ELSCloud.ELS_AddSubjectToProtocol = function(userID, protocolID)
{
	var AddSubjectToProtocol = ELSPlugin().ELS_Cloud_AddSubjectToProtocol(userID, protocolID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_AddSubjectToProtocol("+userID+","+protocolID+")");
		console.log(AddSubjectToProtocol);		
	}
    return AddSubjectToProtocol;
};

/**
 * Set protocol on ElsCloud
 * @param protocolID: int protocolID of protocol
 * @returns {bool - true if successful, false if not}
 * @constructor
 */
ELSCloud.ELS_SetProtocol = function(protocolID)
{
	var SetProtocol = ELSPlugin().ELS_Cloud_SetProtocol(protocolID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_SetProtocol("+protocolID+")");
		console.log(SetProtocol);		
	}
    return SetProtocol;
};

/**
 * Set experiment on ElsCloud
 * @param experimentID: int ID of Experiment
 * @returns {bool - true if successful, false if not}
 */

ELSCloud.ELS_SetExperiment = function(experimentID)
{
	var ELS_SetExperiment = ELSPlugin().ELS_Cloud_SetExperiment(experimentID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_SetExperiment("+experimentID+")");
		console.log(ELS_SetExperiment);		
	}
    return ELS_SetExperiment;
};

/**
 * Create new experiment on ElsCloud
 * @param name: string name of experiment
 * @param description: string description of experiment
 * @param experimentID: int receives number of experiment
 * @returns {bool: true if create experiment successfully and return id of experiment}
 * @constructor
 */
ELSCloud.ELS_CreateExperiment = function(name, description, experimentID)
{
	var CreateExperiment = ELSPlugin().ELS_Cloud_CreateExperiment(name, description, experimentID);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_CreateExperiment("+name+","+description+","+experimentID+")");
		console.log(CreateExperiment);		
	}
    return CreateExperiment;
};

/**
 * Create new session on ElsCloud
 * @returns {string - session of cloud}
 * @constructor
 */
ELSCloud.ELS_CreateRecordingSession = function()
{
	var CreateRecordingSession = ELSPlugin().ELS_Cloud_CreateRecordingSession();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_CreateRecordingSession()");
		console.log(CreateRecordingSession);		
	}
    return CreateRecordingSession;
};

/**
 * Start record data from headset and upload to ElsCloud
 * @returns {bool - true if start successfully}
 * @constructor
 */
ELSCloud.ELS_StartRecordData = function()
{
	var StartRecordData = ELSPlugin().ELS_Cloud_StartRecordData();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_StartRecordData()");
		console.log(StartRecordData);		
	}
    return StartRecordData;
};

/**
 * Start record data from headset and upload to ElsCloud
 * @param oceiFilePath: string-path of file
 * @param overtime: bool
 * @param timeLimit: int-default is 24
 * @returns {bool - true if start record successfully, false if not}
 */

ELSCloud.ELS_StartRecordDataWithOCEFile = function(oceiFilePath,overtime,timeLimit)
{
	var ELS_StartRecordDataWithOCEFile = ELSPlugin().ELS_Cloud_StartRecordDataWithOCEFile(oceiFilePath,overtime,timeLimit);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_StartRecordDataWithOCEFile("+oceiFilePath+","+overtime+","+timeLimit+")");
		console.log(ELS_StartRecordDataWithOCEFile);		
	}
    return ELS_StartRecordDataWithOCEFile;
};

/**
 * Stop record data from headset
 * @returns {bool - true if end successfully, false if not}
 * @constructor
 */
ELSCloud.ELS_StopRecordData = function()
{
	var StopRecordData = ELSPlugin().ELS_Cloud_StopRecordData();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_StopRecordData()");
		console.log(StopRecordData);		
	}
    return StopRecordData;
};

/**
 * Request get report on ElsCloud
 * @returns {Array: map - values engagementScore, excitementScore, stressScore, relaxScore, interestScore}
 * @constructor
 */
ELSCloud.ELS_GetReportOnline = function()
{
	var GetReportOnline = ELSPlugin().ELS_Cloud_GetReportOnline();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_GetReportOnline()");
		console.log(GetReportOnline);		
	}
    return GetReportOnline;
};

/**
 * Request get offline report on ElsCloud
 * @returns {Array: map - values engagementScore, excitementScore, affinityScore}
 * @constructor
 */
ELSCloud.ELS_GetOfflineReport = function()
{
	var GetOfflineReport = ELSPlugin().ELS_Cloud_GetOfflineReport();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_GetOfflineReport()");
		console.log(GetOfflineReport);		
	}
    return GetOfflineReport;
};

/**
 * Start marker of "eyes open" state and upload on ElsCloud
 * @returns {bool- true if marker successfully}
 * @constructor
 */
ELSCloud.ELS_Marker_EyeOpenStart = function()
{
	var Marker_EyeOpenStart = ELSPlugin().ELS_Cloud_Marker_EyeOpenStart();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Marker_EyeOpenStart()");
		console.log(Marker_EyeOpenStart);		
	}
    return Marker_EyeOpenStart;
};

/**
 * End marker of "eyes open" state and upload on ElsCloud
 * @returns {bool- true if marker successfully}
 * @constructor
 */
ELSCloud.ELS_Marker_EyeOpenEnd = function()
{
	var Marker_EyeOpenEnd = ELSPlugin().ELS_Cloud_Marker_EyeOpenEnd();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Marker_EyeOpenEnd()");
		console.log(Marker_EyeOpenEnd);		
	}
    return Marker_EyeOpenEnd;
};

/**
 * Start marker of "eyes closed" state and upload on ElsCloud
 * @returns {bool- true if marker successfully}
 * @constructor
 */
ELSCloud.ELS_Marker_EyeClosedStart = function()
{
	var Marker_EyeClosedStart = ELSPlugin().ELS_Cloud_Marker_EyeClosedStart();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Marker_EyeClosedStart()");
		console.log(Marker_EyeClosedStart);		
	}
    return Marker_EyeClosedStart;
};

/**
 * End marker of "eyes closed" state and upload on ElsCloud
 * @returns {bool- true if marker successfully}
 * @constructor
 */
ELSCloud.ELS_Marker_EyeClosedEnd = function()
{
	var Marker_EyeClosedEnd = ELSPlugin().ELS_Cloud_Marker_EyeClosedEnd();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Marker_EyeClosedEnd()");
		console.log(Marker_EyeClosedEnd);		
	}
    return Marker_EyeClosedEnd;
};

/**
 * Start marker of "recording" state and upload on ElsCloud
 * @returns {bool- true if marker successfully}
 * @constructor
 */
ELSCloud.ELS_Marker_RecordingStart = function()
{
	var Marker_RecordingStart = ELSPlugin().ELS_Cloud_Marker_RecordingStart();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Marker_RecordingStart()");
		console.log(Marker_RecordingStart);		
	}
    return Marker_RecordingStart;
};

/**
 * Update note for session
 * @para note: string note want to update
 * @returns {bool- true if update successfully}
 * @constructor
 */
ELSCloud.ELS_UpdateNote = function(note)
{
	var UpdateNote = ELSPlugin().ELS_Cloud_UpdateNote(note);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UpdateNote("+note+")");
		console.log(UpdateNote);		
	}
    return UpdateNote;
};

/**
 * Update tag for session
 * @param tag: string tag want to update
 * @returns {bool- true if update successfully}
 * @constructor
 */
ELSCloud.ELS_UpdateTag = function(tag)
{
	var UpdateTag = ELSPlugin().ELS_Cloud_UpdateTag(tag);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UpdateTag("+tag+")");
		console.log(UpdateTag);		
	}
    return UpdateTag;
};

/**
 * Update photo for session
 * @param filePath: string - path of image file which want upload
 * @returns {bool- true if upload successfully}
 * @constructor
 */
ELSCloud.ELS_UploadPhoto = function(filePath)
{
	var UploadPhoto = ELSPlugin().ELS_Cloud_UploadPhoto(filePath);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UploadPhoto("+filePath+")");
		console.log(UploadPhoto);		
	}
    return UploadPhoto;
};

/**
 * Terminate the connection to ElsCloud server and EmoEngine
 * @returns {void - no return data}
 * @constructor
 */
ELSCloud.ELS_Disconnect = function()
{
	var Disconnect = ELSPlugin().ELS_Cloud_Disconnect();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Disconnect()");
		console.log(Disconnect);		
	}
    return Disconnect;
};

/**
 * Update new EmoState from Engine
 * @param emostateFilePath: string- emostate file path
 * @param edfFilePath: string - edf file path
 * @returns {string}
 * @constructor
 */
ELSCloud.ELS_UploadEdfFile = function(emostateFilePath, edfFilePath)
{
	var UploadEdfFile = ELSPlugin().ELS_Cloud_UploadEdfFile(emostateFilePath, edfFilePath);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UploadEdfFile("+emostateFilePath+","+edfFilePath+")");
		console.log(UploadEdfFile);		
	}
    return UploadEdfFile;
};

/**
 * Upload file profile of user
 * @param profileName: string - profile name
 * @param filePath: string - path to profile name
 * @param pType: int - 0 is TRAINING, 1 is EMOKEY
 * @returns {bool- 1 if success, 0 if fail}
 * @constructor
 */
ELSCloud.ELS_UploadProfileFile = function(profileName, filePath, ptype)
{
	var UploadProfileFile = ELSPlugin().ELS_Cloud_UploadProfileFile(profileName, filePath, ptype);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UploadProfileFile("+profileName+","+filePath+","+ptype+")");
		console.log(UploadProfileFile);		
	}
    return UploadProfileFile;
};

/**
 * Update exist profile of user
 * @param profileId: int - ID of profile
 * @param filePath: string - path to profile
 * @returns {bool - true if update successfully, false if not}
 */
ELSCloud.ELS_UpdateProfileFile = function(profileId,filePath)
{
	var ELS_UpdateProfileFile = ELSPlugin().ELS_Cloud_UpdateProfileFile(profileId, filePath);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UpdateProfileFile("+profileId+","+filePath+")");
		console.log(ELS_UpdateProfileFile);		
	}
    return ELS_UpdateProfileFile;
};

/**
 * Delete exist profile of user
 * @param profileId: int - ID of profile
 * @returns {bool - true if delete successfully, false if not}
 */
ELSCloud.ELS_DeleteProfileFile = function(profileId)
{
	var ELS_DeleteProfileFile = ELSPlugin().ELS_Cloud_DeleteProfileFile(profileId);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_DeleteProfileFile("+profileId+")");
		console.log(ELS_DeleteProfileFile);		
	}
    return ELS_DeleteProfileFile;
};

/**
 * Get info Profile of user
 * @param profileName
 * @returns {int - profile id of profile name, 0 if request failed, -1 if not existe profile name}
 * @constructor
 */
ELSCloud.ELS_Cloud_GetProfileId = function(profileName)
{
	var GetProfileId = ELSPlugin().ELS_Cloud_GetProfileId(profileName);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UploadProfileFile("+profileName+")");
		console.log(GetProfileId);		
	}
    return GetProfileId;
};

/**
 * Donwload file Profile
 * @param profileId: int - id of profile
 * @param destPath: string - path to store profile
 * @returns {bool - 1 if success, 0 if fail}
 * @constructor
 */
ELSCloud.ELS_DownloadFileProfile = function(profileId, destPath)
{
	var DownloadFileProfile = ELSPlugin().ELS_Cloud_DownloadFileProfile(profileId, destPath);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_UploadProfileFile("+profileId+","+destPath+")");
		console.log(DownloadFileProfile);		
	}
    return DownloadFileProfile;
};

/**
 * Get All Profile Name
 * @returns {int - Number of Profile Name}
 * @constructor
 */
ELSCloud.ELS_GetAllProfileName = function()
{
	var GetAllProfileName = ELSPlugin().ELS_Cloud_GetAllProfileName();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_GetAllProfileName()");
		console.log(GetAllProfileName);		
	}
    return GetAllProfileName;
};

/**
 * Get ID of profile at Index
 * @param index: int - Index of profile in cloud
 * @returns {int - Profile ID at index}
 */
ELSCloud.ELS_ProfileIDAtIndex = function(index)
{
	var ELS_ProfileIDAtIndex = ELSPlugin().ELS_Cloud_ProfileIDAtIndex(index);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_ProfileIDAtIndex("+index+")");
		console.log(ELS_ProfileIDAtIndex);		
	}
    return ELS_ProfileIDAtIndex;
};

/**
 * Get ProfileNameAtIndex
 * @param index: int - index of profile in cloud
 * @returns {string - Profile Name at index}
 * @constructor
 */
ELSCloud.ELS_ProfileNameAtIndex = function(index)
{
	var ProfileNameAtIndex = ELSPlugin().ELS_Cloud_ProfileNameAtIndex(index);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_ProfileNameAtIndex("+index+")");
		console.log(ProfileNameAtIndex);		
	}
    return ProfileNameAtIndex;
};

/**
 * Get last modified time of Profile
 * @param index: int - index of profile in cloud
 * @returns {string - last time modified profile}
 */
ELSCloud.ELS_ProfileLastModifiedAtIndex = function(index)
{
	var ELS_ProfileLastModifiedAtIndex = ELSPlugin().ELS_Cloud_ProfileLastModifiedAtIndex(index);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_ProfileLastModifiedAtIndex("+index+")");
		console.log(ELS_ProfileLastModifiedAtIndex);		
	}
    return ELS_ProfileLastModifiedAtIndex;
};

/**
 * Get type of Profile
 * @param index: int - index of profile in cloud
 * @returns {int - profile type, 1 is TRAINING, 0 is EMOKEY}
 */
ELSCloud.ELS_ProfileTypeAtIndex = function(index)
{
	var ELS_ProfileTypeAtIndex = ELSPlugin().ELS_Cloud_ProfileTypeAtIndex(index);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_ProfileTypeAtIndex("+index+")");
		console.log(ELS_ProfileTypeAtIndex);		
	}
    return ELS_ProfileTypeAtIndex;
};

/**
 * Save Open Close Eye Info to file
 * @param fileName: string - name of profile file
 * @returns {bool - true if save successfully, false if not}
 */
ELSCloud.ELS_SaveOpenCloseEyeInfo = function(fileName)
{
	var ELS_SaveOpenCloseEyeInfo = ELSPlugin().ELS_Cloud_SaveOpenCloseEyeInfo(fileName);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_SaveOpenCloseEyeInfo("+fileName+")");
		console.log(ELS_SaveOpenCloseEyeInfo);		
	}
    return ELS_SaveOpenCloseEyeInfo;
};

/**
 * Reset pasword
 * @param userName
 * @returns {bool - 1 if success, 0 if fail}
 * @constructor
 */
ELSCloud.ELS_ResetPassword = function(userName)
{
	var ResetPassword = ELSPlugin().ELS_Cloud_ResetPassword(userName);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Cloud_ResetPassword("+userName+")");
		console.log(ResetPassword);		
	}
    return ResetPassword;
};

/**
 * Logout from cloud server
 * @returns {bool - true if logout successfully, false if not}
 */
ELSCloud.ELS_Logout = function()
{
	var ELS_Logout = ELSPlugin().ELS_Cloud_Logout();
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_Logout()");
		console.log(ELS_Logout);		
	}
    return ELS_Logout;
};

/**
 * Reupload offline data
 * @param fileName: string - name of profile
 * @returns {bool- true if upload successfully, false if not}
 */
ELSCloud.ELS_ReuploadOfflineSession = function(fileName)
{
	var ELS_ReuploadOfflineSession = ELSPlugin().ELS_Cloud_ReuploadOfflineSession(fileName);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_ReuploadOfflineSession("+fileName+")");
		console.log(ELS_ReuploadOfflineSession);		
	}
    return ELS_ReuploadOfflineSession;
};

/**
 * save offline session info to file
 * @param fileName: string - name of file
 * @returns: void - no return data
 */
ELSCloud.ELS_SaveOfflineSessionInfo = function(fileName)
{
	var ELS_SaveOfflineSessionInfo = ELSPlugin().ELS_Cloud_SaveOfflineSessionInfo(fileName);
	if(ELSCloud.DebugLog)
	{
		console.log("ELSCloud.ELS_SaveOfflineSessionInfo("+fileName+")");
		console.log(ELS_SaveOfflineSessionInfo);		
	}
    return ELS_SaveOfflineSessionInfo;
};