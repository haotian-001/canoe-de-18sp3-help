define({"0":{y:0,u:"../Content/Topics/FR320/AutosarNMFR320.htm",l:-1,t:"AUTOSAR FlexRay Network Management 3.2.0",i:0.0136986301369862,a:"Start Page AUTOSAR FlexRay Network Management 3.2.0    "},"1":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmNetworkRequestFR320.htm",l:-1,t:"FrNm_NetworkRequest",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Control   »   Fr Nm_NetworkRequest Fr Nm_NetworkRequest   Function Syntax long  Fr Nm_NetworkRequest( ) Description Indicate that the NM node needs the network. Parameters — Return Values Example — Availability  "},"2":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetStateFR320.htm",l:-1,t:"FrNm_GetState",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetState Fr Nm_GetState   Function Syntax long  Fr Nm_GetState( ) Description The returned value indicates the NM state the node is currently in. Parameters — Return Values Example — Availability  "},"3":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPduDataFR320.htm",l:-1,t:"FrNm_GetPduData",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetPduData Fr Nm_GetPduData   Function Syntax long  Fr Nm_GetPduData(BYTE pduOut[], dword bufferLen) Description Copy the last received NM  PDU  completely into the buffer. Parameters Return Values Example — Availability  "},"4":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmNetworkReleaseFR320.htm",l:-1,t:"FrNm_NetworkRelease",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Control   »  Fr Nm_NetworkRelease Fr Nm_NetworkRelease   Function Syntax long  Fr Nm_NetworkRelease( ) Description Indicate that the NM node doesn’t need the network, and allows it to enter Bus-Sleep mode. Parameters — Return Values Example — ..."},"5":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmDisablePassiveModeFR320.htm",l:-1,t:"FrNm_DisablePassiveMode",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Configuration   »  Fr Nm_DisablePassiveMode\n  \n Fr Nm_DisablePassiveMode   Function Syntax long  Fr Nm_DisablePassiveMode( ) Description Stop using the passive mode: During Bus-Sleep, a node may be put into passive mode, or back to active mode. In ..."},"6":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmReinitSleepTimerFR320.htm",l:-1,t:"FrNm_ReinitSleepTimer",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer   »   Fr Nm_ReinitSleepTimer Fr Nm_ReinitSleepTimer   Function Syntax long  Fr Nm_ReinitSleepTimer(long isActive) Description This function reinitializes the timer until NM releases the network. Calling has no ..."},"7":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmCheckRemoteSleepIndFR320.htm",l:-1,t:"FrNm_CheckRemoteSleepInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_CheckRemoteSleepInd Fr Nm_CheckRemoteSleepInd   Function Syntax long  Fr Nm_CheckRemoteSleepInd( ) Description Check if remote sleep (all nodes except this one allow transition to Bus-Sleep) has been detected, i.e. this node is the ..."},"8":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmRequestBusSynchFR320.htm",l:-1,t:"FrNm_RequestBusSynch",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Control   »   Fr Nm_RequestBusSynch Fr Nm_RequestBusSynch   Function Syntax long  Fr Nm_RequestBusSynch( ) Description Send a NM message immediately to resynchronize all NM timeouts in the nodes on the network. The NM cycle timer is not restarted, ..."},"9":{y:0,u:"../Content/Topics/FR320/Basics/INIfilesDefaultINIcontentFR320.htm",l:-1,t:"INI Files - Default INI Content",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  INI Files - Default INI Content INI Files - Default INI Content   Default AUTOSARFlexrayNM32.INI content ; AUTOSAR FlexRay Network Management configuration file ; V3.2.0 ; ; This file specifies NM parameters for one FlexRay network ; and additional information ..."},"10":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmConfigureILNotificationsFR320.htm",l:-1,t:"FrNm_ConfigureILNotifications",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer   »   Fr Nm_ConfigureILNotifications Fr Nm_ConfigureILNotifications   Function Syntax long  Fr Nm_ConfigureILNotifications(dword direction, dword mode) Description This function influences the coupling between ..."},"11":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetUserDataFR320.htm",l:-1,t:"FrNm_GetUserData",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetUserData Fr Nm_GetUserData   Function Syntax long  Fr Nm_GetUserData(BYTE dataOut[], dword bufferLen) Description Copy the user data of the last received NM  PDU  into the output buffer. Parameters Return Values Example — ..."},"12":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionEnableCommunicationFR320.htm",l:-1,t:"FrNm_EnableCommunication",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »   Fr Nm_EnableCommunication Fr Nm_EnableCommunication   Function Syntax void  Fr Nm_EnableCommunication(dword channelMask, dword pduType) Description This function enables the sending of NM messages. The parameters allow ..."},"13":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPduRxInd2FR320.htm",l:-1,t:"FrNm_PduRxInd2",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_PduRxInd2 Fr Nm_PduRxInd2   Function Syntax void  Fr Nm_PduRxInd2(dword busContext, dword shortId, dword longId, char name[], dword sourceNodeIdentifier, long repeatMessageBit, BYTE data[]) ..."},"14":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmFIIgnoreRepeatMessageBitFR320.htm",l:-1,t:"FrNmFI_IgnoreRepeatMessageBit",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Fault Injection   »   Fr NmFI_IgnoreRepeatMessageBit Fr NmFI_IgnoreRepeatMessageBit   Function Syntax void  Fr NmFI_IgnoreRepeatMessageBit(long value) Description Defines the reaction upon received repeat message bit. Parameters Return Values — Example ..."},"15":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPduTxIndFR320.htm",l:-1,t:"FrNm_PduTxInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_PduTxInd Fr Nm_PduTxInd   Function Syntax void  Fr Nm_PduTxInd(dword channelMask, dword slotId, dword pduType, BYTE data[], long identifier, long repeatMessageBit, long vote) Description This ..."},"16":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmCtrlSimulationOffFR320.htm",l:-1,t:"FrNm_CtrlSimulationOff",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modeling Library Configuration  »  Fr Nm_CtrlSimulationOff Fr Nm_CtrlSimulationOff   Function Syntax long  Fr Nm_CtrlSimulationOff( ) Description This function will turn off the complete NM simulation by the  modeling library . While the NM simulation ..."},"17":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetDLLInfoFR320.htm",l:-1,t:"FrNm_GetDLLInfo",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modeling Library Configuration  »  Fr Nm_GetDLLInfo Fr Nm_GetDLLInfo   Function Syntax dword  Fr Nm_GetDLLInfo(dword selector) Description Return additional information about the  modeling library . Parameters Return Values Example — Availability  "},"18":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmCtrlSimulationOnFR320.htm",l:-1,t:"FrNm_CtrlSimulationOn",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modeling Library Configuration  »  Fr Nm_CtrlSimulationOn Fr Nm_CtrlSimulationOn   Function Syntax long  Fr Nm_CtrlSimulationOn( ) Description This function will turn on the complete NM simulation by the  modeling library . While the NM simulation is ..."},"19":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetLocalNodeIdentifierFR320.htm",l:-1,t:"FrNm_GetLocalNodeIdentifier",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Node Information   »   Fr Nm_GetLocalNodeIdentifier Fr Nm_GetLocalNodeIdentifier   Function Syntax dword  Fr Nm_GetLocalNodeIdentifier( ) Description Return the NM identifier of this node. Parameters — Return Values Node identifier, range 0x00 – 0xFF ..."},"20":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmInhibitActiveWakeUpBitFR320.htm",l:-1,t:"FrNm_InhibitActiveWakeUpBit",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »  Fr Nm_InhibitActiveWakeUpBit Fr Nm_InhibitActiveWakeUpBit   Function Syntax void  Fr Nm_InhibitActiveWakeUpBit (long value) Description By default, the active wake-up bit in the Control Bit Vector of the NM PDU is set. ..."},"21":{y:0,u:"../Content/Topics/FR320/Basics/FIBEXandSchedulingVariantFR320.htm",l:-1,t:"FIBEX Definition / Scheduling Variant",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  FIBEX Definition / Scheduling Variant FIBEX Definition / Scheduling Variant   FIBEX Definition On FlexRay, the communication matrix is defined by a FIBEX database. In it the schedule of the slots in the FlexRay cycle are defined, and also send/receive relations ..."},"22":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionFrNmSynchronizeModeIndFR320.htm",l:-1,t:"FrNm_SynchronizeModeInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  Network Mode Indications   »  FrNm_SynchronizeModeInd FrNm_SynchronizeModeInd   Function Syntax void    FrNm_SynchronizeModeInd( ) Description This function indicate that the NM has entered the respective mode. Parameters — Return Values — ..."},"23":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPncBitVectorOffsetFR320.htm",l:-1,t:"FrNm_GetPncBitVectorOffset",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »   Fr Nm_GetPncBitVectorOffset Fr Nm_GetPncBitVectorOffset   Function Syntax long  Fr Nm_GetPncBitVectorOffset( ) Description Returns the offset (in bytes) of the Partial Network Cluster (PNC) bit vector within the NM PDU. ..."},"24":{y:0,u:"../Content/Topics/FR320/Basics/INIfilesPartialNetworkFR320.htm",l:-1,t:"INI Files - Usage of Partial Networking",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  INI Files - Usage of Partial Networking INI Files - Usage of Partial Networking   Introduction This section provides more information about configuration and usage of the partial networking (PN) feature. Configuration Rules To use partial networking in your ..."},"25":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetControlBitVectorFR320.htm",l:-1,t:"FrNm_SetControlBitVector",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »   Fr Nm_SetControlBitVector Fr Nm_SetControlBitVector   Function Syntax void  Fr Nm_SetControlBitVector(dword controlBits) Description This function allows setting the Control Bit Vector byte sent by this node to any ..."},"26":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmDisablePartialNetworkingFR320.htm",l:-1,t:"FrNm_DisablePartialNetworking",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Configuration   »  Fr Nm_DisablePartialNetworking\n Fr Nm_DisablePartialNetworking   Function Syntax long  Fr Nm_DisablePartialNetworking( ) Description Stop using partial networking for this node. All relevant parameters must be available ( INI ..."},"27":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetNodeNameFR320.htm",l:-1,t:"FrNm_GetNodeName",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Node Information   »   Fr Nm_GetNodeName Fr Nm_GetNodeName   Function Syntax void  Fr Nm_GetNodeName(char bufferOut[], dword bufferSize) Description The  FIBEX  database name of this node is copied into the provided buffer. Parameters Return Values — ..."},"28":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPNRequestIndFR320.htm",l:-1,t:"FrNm_PNRequestInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Event Indications   »   Fr Nm_PNRequestInd Fr Nm_PNRequestInd   Function Syntax void  Fr Nm_PNRequestInd(long partialNetworkId) Description Indication that a certain partial network is now requested. The indication will be only called if the partial ..."},"29":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetAutoStartParamFR320.htm",l:-1,t:"FrNm_SetAutoStartParam",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Configuration   »  Fr Nm_SetAutoStartParam \n Fr Nm_SetAutoStartParam   Function Syntax void  Fr Nm_SetAutoStartParam(dword autoStartParam) Description Define the behavior of NM at measurement start. If used at all, the function must be called within ..."},"30":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPnAffiliationFR320.htm",l:-1,t:"FrNm_GetPnAffiliation",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Node Information   »   Fr Nm_GetPnAffiliation Fr Nm_GetPnAffiliation   Function Syntax long  Fr Nm_GetPnAffiliation(long partialNetworkId) Description When using partial networking, a node filters NM messages according to the request mask of the ..."},"31":{y:0,u:"../Content/Topics/FR320/SupportedFeaturesFR320.htm",l:-1,t:"Supported Features",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Supported Features Supported Features    "},"32":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetNodeStateFR320.htm",l:-1,t:"FrNm_GetNodeState",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetNodeState Fr Nm_GetNodeState   Function Syntax long  Fr Nm_GetNodeState(dword nodeId) Description Check if the node with the given NM identifier has sent a NM message the last time the network was in Repeat Message state.  ..."},"33":{y:0,u:"../Content/Topics/FR320/Basics/INIfilesGlobalParametersFR320.htm",l:-1,t:"INI Files - Global Parameters",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  INI Files - Global Parameters INI Files - Global Parameters   The following parameters are applied to the whole network.  They can be defined in each of the possible INI files.  "},"34":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetUserDataFR320.htm",l:-1,t:"FrNm_SetUserData",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modification of User Data   »   Fr Nm_SetUserData Fr Nm_SetUserData   Function Syntax void  Fr Nm_SetUserData(BYTE userData[], dword count) Description Set the user data this node sends in its NM  PDU  to the byte sequence given, where only the bytes ..."},"35":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPduRxIndFR320.htm",l:-1,t:"FrNm_PduRxInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_PduRxInd Fr Nm_PduRxInd   Function Syntax void  Fr Nm_PduRxInd( dword  slotId ,  dword identifier, long bRepeatMessageBit, BYTE data[]) Description A call to this function indicates the reception ..."},"36":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetNodeIdentifierFR320.htm",l:-1,t:"FrNm_GetNodeIdentifier",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetNodeIdentifier Fr Nm_GetNodeIdentifier   Function Syntax long  Fr Nm_GetNodeIdentifier( ) Description Get the NM identifier of the node that sent the last received NM message. Parameters — Return Values Example — Availability  "},"37":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetILSleepTimeFR320.htm",l:-1,t:"FrNm_SetILSleepTime",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer   »   Fr Nm_SetILSleepTime Fr Nm_SetILSleepTime   Function Syntax long  Fr Nm_SetILSleepTime(dword timeMS) Description This function changes the value for next reinitialization of the sleep timer. An on-going ..."},"38":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPnRequestBitsDefaultFR320.htm",l:-1,t:"FrNm_GetPnRequestBitsDefault",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Node Information   »   Fr Nm_GetPnRequestBitsDefault Fr Nm_GetPnRequestBitsDefault   Function Syntax long  Fr Nm_GetPnRequestBitsDefault( BYTE bufferOut[], dword bufferSize, dword pnRequestBitsLengthOut[]) Description The default partial network ..."},"39":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmIsPnCurrentlyRequestedFR320.htm",l:-1,t:"FrNm_IsPnCurrentlyRequested",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_IsPnCurrentlyRequested Fr Nm_IsPnCurrentlyRequested   Function Syntax long  Fr Nm_IsPnCurrentlyRequested(long partialNetworkId, long flags) Description This function allows to retrieve information about the status of a certain ..."},"40":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmEnablePartialNetworkingFR320.htm",l:-1,t:"FrNm_EnablePartialNetworking",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Configuration   »  Fr Nm_EnablePartialNetworking\n Fr Nm_EnablePartialNetworking   Function Syntax long  Fr Nm_EnablePartialNetworking( ) Description Start using partial networking for this node. All relevant parameters must be available ( INI Files ..."},"41":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPnCurrentInternalRequestBitsFR320.htm",l:-1,t:"FrNm_GetPnCurrentInternalRequestBits",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetPnCurrentInternalRequestBits Fr Nm_GetPnCurrentInternalRequestBits   Function Syntax long  Fr Nm_GetPnCurrentInternalRequestBits(BYTE bufferOut[], dword bufferSize, dword numberOfBitsOut [])) Description This function allows to ..."},"42":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPreSendIndExtFR320.htm",l:-1,t:"FrNm_PreSendIndExt",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_PreSendIndExt Fr Nm_PreSendIndExt   Function Syntax long  Fr Nm_PreSendIndExt(WORD dlcInOut[], BYTE data[], dword channelMask, dword pduType) Description Directly before sending a NM message on the ..."},"43":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmBusSleepModePreIndFR320.htm",l:-1,t:"FrNm_BusSleepModePreInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Event Indications   »  FrNm_BusSleepModePreInd FrNm_BusSleepModePreInd   Function Syntax void FrNm_BusSleepModePreInd(long valid, long deltaCycles, long absCycle) Description This indication is invoked a specific number of FlexRay cycles ..."},"44":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmBusSleepModeIndFR320.htm",l:-1,t:"FrNm_BusSleepModeInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  Network Mode Indications   »   Fr Nm_BusSleepModeInd Fr Nm_BusSleepModeInd   Function Syntax void    Fr Nm_BusSleepModeInd( ) Description This function indicates that the NM has entered the respective mode. Parameters — Return Values — ..."},"45":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetApplicationActivityFR320.htm",l:-1,t:"FrNm_SetApplicationActivity",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer   »   Fr Nm_SetApplicationActivity Fr Nm_SetApplicationActivity   Function Syntax long  Fr Nm_SetApplicationActivity(long isActive) Description This function sets the NM’s application activity. If the flag is ..."},"46":{y:0,u:"../Content/Topics/FR320/Basics/INIfilesNodeSpecificParametersFR320.htm",l:-1,t:"INI Files - Node Specific Parameters",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  INI Files - Node Specific Parameters INI Files - Node Specific Parameters   The INI file may contain additional information for the nodes. To achieve this, a new section must be added to the INI file that is named exactly as the node is named in the database. ..."},"47":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionFrNmPnInactiveIndFR320.htm",l:-1,t:"FrNm_PnInactiveInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Event Indications   »  FrNm_PnInactiveInd FrNm_PnInactiveInd   Function Syntax void FrNm_PnInactiveInd( ) Description This function is called when the node would go to sleep because of its partial network being shut down, if this was ..."},"48":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmEnablePassiveModeFR320.htm",l:-1,t:"FrNm_EnablePassiveMode\n",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Configuration   »  Fr Nm_EnablePassiveMode\n Fr Nm_EnablePassiveMode\n   Function Syntax long  Fr Nm_EnablePassiveMode( ) Description Start using the passive mode: During Bus-Sleep, a node may be put into passive mode, or back to active mode. In ..."},"49":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmControlBitVectorIndFR320.htm",l:-1,t:"FrNm_ControlBitVectorInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_ControlBitVectorInd Fr Nm_ControlBitVectorInd   Function Syntax void  Fr Nm_ControlBitVectorInd(dword sourceId, dword controlBits) Description This function is called if a NM  dataPDu  with a ..."},"50":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetCbvPositionFR320.htm",l:-1,t:"Nm_GetCbvPosition",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   » Nm_GetCbvPosition Nm_GetCbvPosition   Function Syntax long  Fr Nm_GetCbvPosition( ) Description Returns the byte position (zero-based numbering) of the Control Bit Vector (CBV) within the NM PDU. Parameters — ..."},"51":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmRepeatMessageRequestFR320.htm",l:-1,t:"FrNm_RepeatMessageRequest",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Control   »   Fr Nm_RepeatMessageRequest Fr Nm_RepeatMessageRequest   Function Syntax long  Fr Nm_RepeatMessageRequest( ) Description Make the NM leave Normal Operation or Ready Sleep state and enter Repeat Message state, and set the repeat message ..."},"52":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPreSendIndFR320.htm",l:-1,t:"FrNm_PreSendInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_PreSendInd Fr Nm_PreSendInd   Function Syntax void  Fr Nm_PreSendInd(WORD dlcInOut[], BYTE data[]) Description Directly before sending a NM message on the bus, this function is called to allow the ..."},"53":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmNetworkModeIndFR320.htm",l:-1,t:"FrNm_NetworkModeInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  Network Mode Indications   »   Fr Nm_NetworkModeInd Fr Nm_NetworkModeInd   Function Syntax void          Fr Nm_NetworkModeInd( ) Description This function indicate that the NM has entered the respective mode. Parameters — Return Values — ..."},"54":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmCarWakeUpIndFR320.htm",l:-1,t:"FrNm_CarWakeUpInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_CarWakeUpInd Fr Nm_CarWakeUpInd   Function Syntax void  Fr Nm_CarWakeUpInd( dword  slotId ,  dword identifier, long bRepeatMessageBit, BYTE data[]) Description A call to this function indicates the ..."},"55":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPnCurrentExternalRequestBitsFR320.htm",l:-1,t:"FrNm_GetPnCurrentExternalRequestBits",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM State   »   Fr Nm_GetPnCurrentExternalRequestBits Fr Nm_GetPnCurrentExternalRequestBits   Function Syntax long  Fr Nm_GetPnCurrentExternalRequestBits(long flags, byte bufferOut[], dword bufferSize, dword numberOfBitsOut [])) Description This ..."},"56":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSynchronizedPncShutdownPduRxIndFR320.htm",l:-1,t:"FrNm_SynchronizedPncShutdownPduRxInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Message Reception and Sending   »   Fr Nm_SynchronizedPncShutdownPduRxInd Fr Nm_SynchronizedPncShutdownPduRxInd   Function Syntax void  Fr Nm_SynchronizedPncShutdownPduRxInd(dword busContext, dword shortId, dword longId, char name[], dword ..."},"57":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetVerbosityFR320.htm",l:-1,t:"FrNm_SetVerbosity",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modeling Library Configuration  »  Fr Nm_SetVerbosity Fr Nm_SetVerbosity   Function Syntax dword  Fr Nm_SetVerbosity(dword selector) Description Set the  modeling library ’s verbosity. The higher the value, the more information is printed in the Write ..."},"58":{y:0,u:"../Content/Topics/FR320/Basics/INIfilesIntroductionFR320.htm",l:-1,t:"INI Files - Introduction",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  INI Files - Introduction INI Files - Introduction   Main INI File On measurement start, the modeling library will read a number of parameters from the file AutosarFlexRayNM32.INI (when using Windows runtime kernel) or libAutosarFlexRayNM32.INI (when using Linux ..."},"59":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmStateChangeNotificationFR320.htm",l:-1,t:"FrNm_StateChangeNotification",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  Notification of State Change   »   Fr Nm_StateChangeNotification Fr Nm_StateChangeNotification   Function Syntax void  Fr Nm_StateChangeNotification(long previousState, long currentState) Description Every time the NM state machine changes ..."},"60":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionDisableCommunicationFR320.htm",l:-1,t:"FrNm_DisableCommunication",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »   Fr Nm_DisableCommunication Fr Nm_DisableCommunication   Function Syntax void  Fr Nm_DisableCommunication(dword channelMask, dword pduType) Description This function disables the sending of NM messages. The parameters ..."},"61":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmRemoteSleepIndFR320.htm",l:-1,t:"FrNm_RemoteSleepInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Event Indications   »   Fr Nm_RemoteSleepInd Fr Nm_RemoteSleepInd   Function Syntax void  Fr Nm_RemoteSleepInd(long flag) Description If no other node on the network has sent a NM  PDU  for a configurable amount of time, this function is ..."},"62":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmSetPnRequestBitsFR320.htm",l:-1,t:"FrNm_SetPnRequestBits",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Modification of User Data   »   Fr Nm_SetPnRequestBits Fr Nm_SetPnRequestBits   Function Syntax long  Fr Nm_SetPnRequestBits(BYTE requestVector[]) Description Set the partial network request bits (the PN info range) within the user data. All relevant ..."},"63":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmGetPncBitVectorLengthFR320.htm",l:-1,t:"FrNm_GetPncBitVectorLength",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  Non Standard Functionality   »   Fr Nm_GetPncBitVectorLength Fr Nm_GetPncBitVectorLength   Function Syntax long  Fr Nm_GetPncBitVectorLength( ) Description Returns the length (in bytes) of the Partial Network Cluster (PNC) bit vector. Parameters — ..."},"64":{y:0,u:"../Content/Topics/FR320/Basics/StateDiagramFR320.htm",l:-1,t:"State Diagram",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Basics »  State Diagram State Diagram   Introduction This diagram is a simplified version of the state diagram shown in the specification. It denotes possible state transitions for NM nodes, triggers for such transitions as well as the corresponding callback functions. ..."},"65":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmNetworkStartIndFR320.htm",l:-1,t:"FrNm_NetworkStartInd",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Callback Functions   »  NM Event Indications   »   Fr Nm_NetworkStartInd Fr Nm_NetworkStartInd   Function Syntax void  Fr Nm_NetworkStartInd( ) Description A NM  PDU  has been received while the node is in Bus-Sleep mode. Typically  Fr Nm_PassiveStartUp( ) will be ..."},"66":{y:0,u:"../Content/Topics/FR320/Functions/CAPLfunctionNmPassiveStartUpFR320.htm",l:-1,t:"FrNm_PassiveStartUp",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  »  CAPL Functions  »  NM Control   »   Fr Nm_PassiveStartUp Fr Nm_PassiveStartUp   Function Syntax long  Fr Nm_PassiveStartUp( ) Description Make the NM leave the Bus-Sleep mode and enter the Repeat Message state, without actually requesting the bus. Parameters — ..."},"67":{y:0,u:"../Content/Topics/FR320/Functions/AutosarNMFunctionsFR320.htm",l:-1,t:"Function Overview",i:0.0136986301369862,a:"AUTOSAR FlexRay NM 3.2.0  » Functions »   Function Overview Function Overview   ON THIS PAGE: CAPL Functions Additional Functions These functions are implemented in the  modeling library  and can be called in CAPL programs. Note that all functions start with the prefix  Fr Nm_. Return Values All ..."},});