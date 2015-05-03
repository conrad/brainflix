
function EdkDll()
{
	eObj = document.getElementById('ElsPlugin');
}

EdkDll.eObj;

//EdkDll.eEvent;
//EdkDll.hEvent;
EdkDll.version;
EdkDll.EDK_OK                           = 0x0000;
EdkDll.EDK_UNKNOWN_ERROR                = 0x0001;

EdkDll.EDK_INVALID_PROFILE_ARCHIVE      = 0x0101;
EdkDll.EDK_NO_USER_FOR_BASEPROFILE      = 0x0102;

EdkDll.EDK_CANNOT_ACQUIRE_DATA          = 0x0200;

EdkDll.EDK_BUFFER_TOO_SMALL             = 0x0300;
EdkDll.EDK_OUT_OF_RANGE                 = 0x0301;
EdkDll.EDK_INVALID_PARAMETER            = 0x0302;
EdkDll.EDK_PARAMETER_LOCKED             = 0x0303;
EdkDll.EDK_COG_INVALID_TRAINING_ACTION  = 0x0304;
EdkDll.EDK_COG_INVALID_TRAINING_CONTROL = 0x0305;
EdkDll.EDK_COG_INVALID_ACTIVE_ACTION    = 0x0306;
EdkDll.EDK_COG_EXCESS_MAX_ACTIONS       = 0x0307;
EdkDll.EDK_EXP_NO_SIG_AVAILABLE         = 0x0308;
EdkDll.EDK_FILESYSTEM_ERROR             = 0x0309;

EdkDll.EDK_INVALID_USER_ID              = 0x0400;

EdkDll.EDK_EMOENGINE_UNINITIALIZED      = 0x0500;
EdkDll.EDK_EMOENGINE_DISCONNECTED       = 0x0501;
EdkDll.EDK_EMOENGINE_PROXY_ERROR        = 0x0502;

EdkDll.EDK_NO_EVENT                     = 0x0600;

EdkDll.EDK_GYRO_NOT_CALIBRATED          = 0x0700;

EdkDll.EDK_OPTIMIZATION_IS_ON           = 0x0800;

EdkDll.EDK_RESERVED1                    = 0x0900;


EdkDll.EE_ExpressivThreshold_t = {
	EXP_SENSITIVITY:0
};
EdkDll.EE_ExpressivTrainingControl_t = {
	EXP_NONE :0, EXP_START:1, EXP_ACCEPT:2, EXP_REJECT:3, EXP_ERASE:4, EXP_RESET:5
};

EdkDll.EE_ExpressivSignature_t = {
	 EXP_SIG_UNIVERSAL:0, EXP_SIG_TRAINED:1
};

EdkDll.EE_CognitivTrainingControl_t = {
	COG_NONE:0, COG_START:1, COG_ACCEPT:2, COG_REJECT:3, COG_ERASE:4, COG_RESET:5
};

EdkDll.EE_Event_t = {	
	EE_UnknownEvent			:0x0000,
    EE_EmulatorError		:0x0001,
    EE_ReservedEvent		:0x0002,
    EE_UserAdded			:0x0010,
    EE_UserRemoved			:0x0020,
    EE_EmoStateUpdated		:0x0040,
    EE_ProfileEvent			:0x0080,
    EE_CognitivEvent		:0x0100,
    EE_ExpressivEvent		:0x0200,
    EE_InternalStateChanged	:0x0400,
};

EdkDll.EE_ExpressivEvent_t = {
	EE_ExpressivNoEvent:0,
    EE_ExpressivTrainingStarted:1,
    EE_ExpressivTrainingSucceeded:2,
    EE_ExpressivTrainingFailed:3,
    EE_ExpressivTrainingCompleted:4,
    EE_ExpressivTrainingDataErased:5,
    EE_ExpressivTrainingRejected:6,
    EE_ExpressivTrainingReset:7
};

EdkDll.EE_CognitivEvent_t ={
	EE_CognitivNoEvent:0,
    EE_CognitivTrainingStarted:1,
    EE_CognitivTrainingSucceeded:2,
    EE_CognitivTrainingFailed:3,
    EE_CognitivTrainingCompleted:4,
    EE_CognitivTrainingDataErased:5,
    EE_CognitivTrainingRejected:6,
    EE_CognitivTrainingReset:7,
    EE_CognitivAutoSamplingNeutralCompleted:8,
    EE_CognitivSignatureUpdated:9
};

EdkDll.EE_DataChannel_t = {
	COUNTER:0, INTERPOLATED:1, RAW_CQ:2,
    AF3:3, F7:4, F3:5, FC5:6, T7:7,
    P7:8, O1:9, O2:10, P8:11, T8:12,
    FC6:13, F4:14, F8:15, AF4:16, GYROX:17,
    GYROY:18, 
    TIMESTAMP:19, ES_TIMESTAMP:20, 
    FUNC_ID:21, FUNC_VALUE:22, MARKER:23,
    SYNC_SIGNAL:24
};


	EdkDll.EE_EmotivSuite_t=
        {
            EE_EXPRESSIV:0, EE_AFFECTIV:1, EE_COGNITIV:2
        } ;

        EdkDll.EE_ExpressivAlgo_t=
        {
            EXP_NEUTRAL		:0x0001,
            EXP_BLINK		:0x0002,
            EXP_WINK_LEFT	:0x0004,
            EXP_WINK_RIGHT	:0x0008,
            EXP_HORIEYE		:0x0010,
            EXP_EYEBROW		:0x0020,
            EXP_FURROW		:0x0040,
            EXP_SMILE		:0x0080,
            EXP_CLENCH		:0x0100,
            EXP_LAUGH		:0x0200,
            EXP_SMIRK_LEFT	:0x0400,
            EXP_SMIRK_RIGHT	:0x0800
        } ;

        EdkDll.EE_AffectivAlgo_t =
        {
            AFF_EXCITEMENT			:0x0001,
            AFF_MEDITATION			:0x0002,
            AFF_FRUSTRATION			:0x0004,
            AFF_ENGAGEMENT_BOREDOM	:0x0008
        } ;

        EdkDll.EE_CognitivAction_t = 
        {
            COG_NEUTRAL				:0x0001,
            COG_PUSH				:0x0002,
            COG_PULL				:0x0004,
            COG_LIFT				:0x0008,
            COG_DROP				:0x0010,
            COG_LEFT				:0x0020,
            COG_RIGHT				:0x0040,
            COG_ROTATE_LEFT			:0x0080,
            COG_ROTATE_RIGHT		:0x0100,
            COG_ROTATE_CLOCKWISE	:0x0200,
            COG_ROTATE_COUNTER_CLOCKWISE	:0x0400,
            COG_ROTATE_FORWARDS		:0x0800,
            COG_ROTATE_REVERSE		:0x1000,
            COG_DISAPPEAR			:0x2000
        } ;
        EdkDll.EE_SignalStrength_t =
        {
            NO_SIGNAL:0, BAD_SIGNAL:1, GOOD_SIGNAL:2
        } ;
        EdkDll.EE_InputChannels_t =
        {
            EE_CHAN_CMS:0, EE_CHAN_DRL:1, EE_CHAN_FP1:2, EE_CHAN_AF3:3, EE_CHAN_F7:4,
            EE_CHAN_F3:5, EE_CHAN_FC5:6, EE_CHAN_T7:7, EE_CHAN_P7:8, EE_CHAN_O1:9,
            EE_CHAN_O2:10, EE_CHAN_P8:11, EE_CHAN_T8:12, EE_CHAN_FC6:13, EE_CHAN_F4:14,
            EE_CHAN_F8:15, EE_CHAN_AF4:16, EE_CHAN_FP2:17
        } ;
        EdkDll.EE_EEG_ContactQuality_t = 
        {
            EEG_CQ_NO_SIGNAL:0, EEG_CQ_VERY_BAD:1, EEG_CQ_POOR:2,
            EEG_CQ_FAIR:3, EEG_CQ_GOOD:4
        } ;

/*[StructLayout(LayoutKind.Sequential)]
        public class InputSensorDescriptor_t
        {
            public EE_InputChannels_t channelId; // logical channel id
            public  fExists;                // does this sensor exist on this headset model
            public  pszLabel;              // text label identifying this sensor
            public Double xLoc;                  // x coordinate from center of head towards nose
            public Double yLoc;                  // y coordinate from center of head towards ears
            public Double zLoc;                  // z coordinate from center of head toward top of skull
        }
*/
        
		//EdkDll.version = ELSPlugin().version;
		// Main 
		//EdkDll.EE_EngineConnect();
		//hEvent = EE_EmoEngineEventCreate();
		/////////////////////////////////////////////////////////
		
function addEvent(obj, name, func)
{
    if (obj.attachEvent) {
        obj.attachEvent("on"+name, func);
    } else {
        obj.addEventListener(name, func, false);
    }
}

/**
 * Check url is valid license, call event when success
 * @returns {*}
 * @constructor
 */
EdkDll.ELS_ValidLicense = function()
{
    return ELSPlugin().ELS_CheckEDKLicense();
}
	// function EngineConnect return 0 if successful
		EdkDll.EE_EngineConnect = function()
		{
			return ELSPlugin().ELS_EE_EngineConnect();
		}
		
		//return unsigned int
		EdkDll.EE_GetError = function()
		{
			return ELSPlugin().ELS_EE_GetError();
		}
		
		// return int = 0 if ok
        EdkDll.EE_EngineRemoteConnect = function()
        {
			return ELSPlugin().ELS_EE_EngineRemoteConnect();
        }
		
		//return int = 0 if ok
        EdkDll.EE_EngineDisconnect = function()
        {
			return ELSPlugin().ELS_EE_EngineDisconnect();
        }
		//not used
        EdkDll.EE_EnableDiagnostics = function( szFilename,  fEnable,  nReserved)
        {
        }
		//privte on plugin
        EdkDll.EE_EmoEngineEventCreate = function()
        {
        }
		//private on plugin
        EdkDll.EE_ProfileEventCreate = function()
        {
        }
		//not used: free EmoEngineEvent
        EdkDll.EE_EmoEngineEventFree = function()
        {
        }
		//private on plugin
        EdkDll.EE_EmoStateCreate = function()
        {
			//return ELSPlugin().ELS_EE_EmoStateCreate();
        }
		//not used: note free help free memory
        EdkDll.EE_EmoStateFree = function(hState)
        {
        }
		//return EE_Event_t 
        EdkDll.EE_EmoEngineEventGetType = function()
        {
			return ELSPlugin().ELS_EE_EmoEngineEventGetType();
        }
		
		// return EE_CognitivEvent_t 
        EdkDll.EE_CognitivEventGetType = function()
        {
			return ELSPlugin().ELS_EE_CognitivEventGetType();
        }
		
		//not used
        EdkDll.EE_ExpressivEventGetType = function()
        {
        }
		//return int = userID: note remove hEvent from this function, can effect website
        EdkDll.EE_EmoEngineEventGetUserId = function()
        {
			return ELSPlugin().ELS_EE_EmoEngineEventGetUserId();
        }
		//return int = 0 if ok: update emostate
        EdkDll.EE_EmoEngineEventGetEmoState = function()
        {
			return ELSPlugin().ELS_EE_EmoEngineEventGetEmoState();
        }
		//return int = 0 if ok: update next event to hevent
        EdkDll.EE_EngineGetNextEvent = function()
        {
			return ELSPlugin().ELS_EE_EngineGetNextEvent();
        }
		//not used
        EdkDll.EE_EngineClearEventQueue = function(eventTypes)
        {
        }
		//return int is number user
        EdkDll.EE_EngineGetNumUser = function()
        {
			return ELSPlugin().ELS_EE_EngineGetNumUser();
        }
		//not used
        EdkDll.EE_SetHardwarePlayerDisplay = function(playerNum)
        {
        }
		//not used
        EdkDll.EE_SetUserProfile = function(profileBuffer,  length)
        {
        }
		
		//not used
        EdkDll.EE_GetUserProfile = function(userId)
        {
        }
		
		//not used, had public on Plugin
        EdkDll.EE_GetBaseProfile = function()
        {
			return ELSPlugin().ELS_EE_GetBaseProfile();
        }
		
		EdkDll.EE_SetBaseProfile = function(userId)
		{
			return ELSPlugin().ELS_EE_SetBaseProfile(userId);
		}
		
		//not used
        EdkDll.EE_GetUserProfileSize = function()
        {
        }

		
        /*EdkDll.EE_GetUserProfileBytes = function( hEvt, Byte[] destBuffer, U length)
        {
        }*/
		
		//return int
        EdkDll.EE_LoadUserProfile = function(userID,szInputFilename)
        {
			return ELSPlugin().ELS_LoadUserProfile(userID,szInputFilename);
        }
		
		//return int
        EdkDll.EE_SaveUserProfile = function(userID,szOutputFilename)
        {
			return ELSPlugin().ELS_SaveUserProfile(userID,szOutputFilename);
        }
		//return string
		EdkDll.EE_GetLocalAppDataPath = function()
		{
			return ELSPlugin().ELS_GetLocalAppDataPath();
		}
		
		//return int
        EdkDll.EE_ExpressivSetThreshold = function( userId, algoName, thresholdName,  value)
        {
			return ELSPlugin().ELS_EE_ExpressivSetThreshold(userId, algoName, thresholdName, value);
        }
		
		//return int: Threshold
        EdkDll.EE_ExpressivGetThreshold = function(userId, algoName, thresholdName)
        {
			return ELSPlugin().ELS_EE_ExpressivGetThreshold(userId, algoName, thresholdName);
        }
		
		//not used: not support training expressiv
        EdkDll.EE_ExpressivSetTrainingAction = function(userId, action)
        {
        }
		
		//not used: not support training expressiv
        EdkDll.EE_ExpressivSetTrainingControl = function( userId, control)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivGetTrainingAction = function(userId)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivGetTrainingTime = function(userId)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivGetTrainedSignatureActions = function(userId)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivGetTrainedSignatureAvailable = function(userId)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivSetSignatureType = function(userId, sigType)
        {
        }
		//not used: not support training expressiv
        EdkDll.EE_ExpressivGetSignatureType = function(userId)
        {
        }
		//return int is error code, = 0 if ok, set enable a action
        EdkDll.EE_CognitivSetActiveActions = function(userId, activeActions)
        {
			return ELSPlugin().ELS_EE_CognitivSetActiveActions(userId, activeActions);
        }
		//return long, is actions enabled
        EdkDll.EE_CognitivGetActiveActions = function(userId)
        {
			return ELSPlugin().ELS_EE_CognitivGetActiveActions(userId);
        }
		//return int = 0 if ok, function push Cognitiv Action to list action need to be enabled
 		EdkDll.EE_EnableCognitivAction = function(cognitivAction,cogBool)
		{
			return ELSPlugin().ELS_EnableCognitivAction(cognitivAction,cogBool);
		}
		//return int = 0 if ok, enable list of pushed Cognitiv Action
		EdkDll.EE_EnableCognitivActionsList= function(userId)
		{
			return ELSPlugin().ELS_EnableCognitivActionsList(userId);
		}
		//return list of enabled Cognitiv Action
		EdkDll.EE_CognitivGetActionsEnabled = function(userId)
		{
			return ELSPlugin().ELS_EE_CognitivGetActionsEnabled(userId);
		} 
		
		//not used
        EdkDll.EE_CognitivGetTrainingTime = function(userId)
        {
        }
		//return int = 0 if ok
        EdkDll.EE_CognitivSetTrainingControl = function(userId,control)
        {
			return ELSPlugin().ELS_EE_CognitivSetTrainingControl(userId, control);
        }
		//return int = 0 if ok
        EdkDll.EE_CognitivSetTrainingAction = function(userId,action)
        {
			return ELSPlugin().ELS_EE_CognitivSetTrainingAction(userId, action);
        }
		//not used
        EdkDll.EE_CognitivGetTrainingAction = function(userId)
        {
        }
		//return list of trained cognitiv action
        EdkDll.EE_CognitivGetTrainedSignatureActions = function(userId)
        {
			return ELSPlugin().ELS_EE_CognitivGetTrainedSignatureActions(userId);
        }
		//return float
        EdkDll.EE_CognitivGetOverallSkillRating = function(userId)
        {
			return ELSPlugin().ELS_EE_CognitivGetOverallSkillRating(userId);
        }
		// return float
        EdkDll.EE_CognitivGetActionSkillRating = function(userId,action)
        {
			return ELSPlugin().ELS_EE_CognitivGetActionSkillRating(userId, action);
        }
		//not used
        EdkDll.EE_CognitivSetActivationLevel = function(userId,level)
        {
        }
		//not used
        EdkDll.EE_CognitivSetActionSensitivity = function( userId,
                                             action1Sensitivity,  action2Sensitivity,
                                             action3Sensitivity,  action4Sensitivity)
        {
        }
		//not used
        EdkDll.EE_CognitivGetActivationLevel = function(userId)
        {
        }
		//not used
        EdkDll.EE_CognitivGetActionSensitivity = function( userId,
                                             pAction1SensitivityOut,  pAction2SensitivityOut,
                                              pAction3SensitivityOut,   pAction4SensitivityOut)
        {
        }
		//not used
        EdkDll.EE_CognitivStartSamplingNeutral = function(userId)
        {
        }
		//not used
        EdkDll.EE_CognitivStopSamplingNeutral = function(userId)
        {
        }
		//not used
        EdkDll.EE_CognitivSetSignatureCaching = function(userId, enabled)
        {
        }
		//not used
        EdkDll.EE_CognitivGetSignatureCaching = function(userId)
        {
        }
		//not used
        EdkDll.EE_CognitivSetSignatureCacheSize = function(userId, size)
        {
        }
		//not used
        EdkDll.EE_CognitivGetSignatureCacheSize = function(userId)
        {
        }
		//not used
        EdkDll.EE_HeadsetGetSensorDetails = function( channelId)
        {
        }
		//not used
        EdkDll.EE_HardwareGetVersion = function(userId)
        {
        }
		
        /*EdkDll.EE_SoftwareGetVersion(Builder pszVersionOut, U nVersionChars, out U pBuildNumOut)
        {
        }
		*/
		// return an Array with pXOut = array[0] and pYOut = array[1]
        EdkDll.EE_HeadsetGetGyroDelta = function(userId)
        {
			return ELSPlugin().ELS_EE_HeadsetGetGyroDelta(userId);
        }
		
		//return int = 0 if ok
        EdkDll.EE_HeadsetGyroRezero = function(userId)
        {
			return ELSPlugin().ELS_EE_HeadsetGyroRezero(userId);
        }
		//not used
        EdkDll.EE_OptimizationParamCreate = function()
        {
        }
		//not used
        EdkDll.EE_OptimizationParamFree = function( hParam)
        {
        }
		//not used
        EdkDll.EE_OptimizationEnable = function(hParam)
        {
        }
		//not used
        EdkDll.EE_OptimizationIsEnabled = function()
        {
        }
		//not used
        EdkDll.EE_OptimizationDisable = function()
        {
        }
		//not used
        EdkDll.EE_OptimizationGetParam = function(hParam)
        {
        }
		//not used
        EdkDll.EE_OptimizationGetVitalAlgorithm = function(hParam,  suite)
        {
        }
        //not used
        EdkDll.EE_OptimizationSetVitalAlgorithm = function( hParam, suite,  vitalAlgorithmBitVector)
        {
        }
        //not used
        EdkDll.EE_ResetDetection = function(userId, suite, detectionBitVector)
        {
        }

		//not supported
        EdkDll.ES_Create = function()
        {
        }
		//not supported
        EdkDll.ES_Free = function()
        {
        }
		//not supported
        EdkDll.ES_Init = function()
        {
        }
		//return second time in float
        EdkDll.ES_GetTimeFromStart = function()
        {
			return ELSPlugin().ELS_ES_GetTimeFromStart();
        }
		//not used
        EdkDll.ES_GetHeadsetOn = function()
        {
        }
		//not used
        EdkDll.ES_GetNumContactQualityChannels = function()
        {
        }
		
		EdkDll.ES_GetContactQualityFromAllChannels = function()
        {
			return ELSPlugin().ELS_ES_GetContactQualityFromAllChannels();
        }
		//not used
        EdkDll.ES_GetContactQuality = function(electroIdx)
        {
        }
		
		//return int 1 or 0
        EdkDll.ES_ExpressivIsBlink = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsBlink();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsLeftWink = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsLeftWink();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsRightWink = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsRightWink();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsEyesOpen = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsEyesOpen();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsLookingUp = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsLookingUp();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsLookingDown= function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsLookingDown();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsLookingLeft = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsLookingLeft();
        }
		//return int 1 or 0
        EdkDll.ES_ExpressivIsLookingRight = function()
        {
			return ELSPlugin().ELS_ES_ExpressivIsLookingRight();
        }
		//not used
		EdkDll.ES_ExpressivGetEyelidState = function(state,size)
        {
        }
		//not used
		EdkDll.ES_ExpressivGetEyeLocation = function( state,size)
        {
        }
		//not used
        EdkDll.ES_ExpressivGetEyebrowExtent = function()
        {
        }
		//return float 0.0 to 1.0
        EdkDll.ES_ExpressivGetSmileExtent = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetSmileExtent();
        }
		//return float from 0.0 to 1.0
        EdkDll.ES_ExpressivGetClenchExtent = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetClenchExtent();
        }
		//return EE_ExpressivAlgo_t is upper face action
        EdkDll.ES_ExpressivGetUpperFaceAction = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetUpperFaceAction();
        }
		//return float is power of upper action
        EdkDll.ES_ExpressivGetUpperFaceActionPower = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetUpperFaceActionPower();
        }
		//return EE_ExpressivAlgo_t is lower face action
        EdkDll.ES_ExpressivGetLowerFaceAction = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetLowerFaceAction();
        }
		//return float is Power of lower face action
        EdkDll.ES_ExpressivGetLowerFaceActionPower = function()
        {
			return ELSPlugin().ELS_ES_ExpressivGetLowerFaceActionPower();
        }
		//not used
        EdkDll.ES_ExpressivIsActive = function( state, type)
        {
        }
		//return float in 0.0 to 1.0
        EdkDll.ES_AffectivGetExcitementLongTermScore = function()
        {
			return ELSPlugin().ELS_ES_AffectivGetExcitementLongTermScore();
        }
		//return float in 0.0 to 1.0
        EdkDll.ES_AffectivGetExcitementShortTermScore = function()
        {
			return ELSPlugin().ELS_ES_AffectivGetExcitementShortTermScore();
        }
		//not used
        EdkDll.ES_AffectivIsActive = function( state,  type)
        {
        }
		//return float in 0.0 to 1.0
        EdkDll.ES_AffectivGetMeditationScore = function()
        {
			return ELSPlugin().ELS_ES_AffectivGetMeditationScore();
        }
		//return float in 0.0 to 1.0
        EdkDll.ES_AffectivGetFrustrationScore = function()
        {
			return ELSPlugin().ELS_ES_AffectivGetFrustrationScore();
        }
		//return float in 0.0 to 1.0
        EdkDll.ES_AffectivGetEngagementBoredomScore = function()
        {
			return ELSPlugin().ELS_ES_AffectivGetEngagementBoredomScore();
        }
		//return current action EE_CognitivAction_t
        EdkDll.ES_CognitivGetCurrentAction = function()
        {
			return ELSPlugin().ELS_ES_CognitivGetCurrentAction();
        }
		//return float is power of current action
        EdkDll.ES_CognitivGetCurrentActionPower = function()
        {
			return ELSPlugin().ELS_ES_CognitivGetCurrentActionPower();
        }
		//not used
        EdkDll.ES_CognitivIsActive = function( state)
        {
        }
		//not used
        EdkDll.ES_CognitivGetCurrentLevelRating = function(state)
        {
        }
		//return int is wireless
        EdkDll.ES_GetWirelessSignalStatus = function()
        {
			return ELSPlugin().ELS_ES_GetWirelessSignalStatus();
        }
		//not used
        EdkDll.ES_Copy = function()
        {
        }
		//not used
        EdkDll.ES_AffectivEqual = function()
        {
			return ELSPlugin().ELS_ES_AffectivEqual();
        }
		//not used
        EdkDll.ES_ExpressivEqual = function()
        {
			return ELSPlugin().ELS_ES_ExpressivEqual();
        }
		//not used
        EdkDll.ES_CognitivEqual = function()
        {
			return ELSPlugin().ELS_ES_CognitivEqual();
        }
		//not used
        EdkDll.ES_EmoEngineEqual = function()
        {
			return ELSPlugin().ELS_ES_EmoEngineEqual();
        }
		//not used
        EdkDll.ES_Equal = function( a,  b)
        {
        }
		//return max and charge level in int
        EdkDll.ES_GetBatteryChargeLevel = function()
        {
			return ELSPlugin().ELS_ES_GetBatteryChargeLevel();
        }
    

