define({"0":{y:0,u:"../Content/Topics/CAN330/AutosarNMCAN330.htm",l:-1,t:"AUTOSAR CAN Network Management 3.3.0",i:0.0133333333333333,a:"Start Page AUTOSAR CAN Network Management 3.3.0   Disclaimer The customer may only use the programs for Automotive Applications as defined in the AUTOSAR Premium Member Agreement („Automotive Applications means applications related to engine powered, land-based, non-railed vehicles for primary ..."},"1":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmInhibitActiveWakeUpBitCAN330.htm",l:-1,t:"Nm_InhibitActiveWakeUpBit",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  » Nm_InhibitActiveWakeUpBit Nm_InhibitActiveWakeUpBit   Function Syntax void Nm_InhibitActiveWakeUpBit (long value) Description By default, the active wake-up bit in the Control Bit Vector of the NM PDU is set. This function ..."},"2":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmCarWakeUpIndCAN330.htm",l:-1,t:"Nm_CarWakeUpInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_CarWakeUpInd Nm_CarWakeUpInd   Function Syntax void Nm_CarWakeUpInd( dword  canId ,  dword identifier, long bRepeatMessageBit, BYTE data[]) Description A call to this function indicates the reception of a ..."},"3":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPncBitVectorOffsetCAN330.htm",l:-1,t:"Nm_GetPncBitVectorOffset",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  »  Nm_GetPncBitVectorOffset Nm_GetPncBitVectorOffset   Function Syntax long Nm_GetPncBitVectorOffset( ) Description Returns the offset (in bytes) of the Partial Network Cluster (PNC) bit vector within the NM PDU. Parameters — ..."},"4":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPNReleasedIndCAN330.htm",l:-1,t:"Nm_PNReleaseInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Event Indications  »  Nm_PNReleaseInd Nm_PNReleaseInd   Function Syntax void Nm_PNReleaseInd(long partialNetworkId) Description Indication that a certain partial network was released. The indication is called as soon as a certain time elapsed without ..."},"5":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetCarWakeUpBitCAN330.htm",l:-1,t:"Nm_SetCarWakeUpBit",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modification of User Data  »  Nm_SetCarWakeUpBit Nm_SetCarWakeUpBit   Function Syntax long Nm_SetCarWakeUpBit(long value) Description Modify the car wake-up bit in the user data. Is only available when the car wake-up bit is configured (else, 0 will be ..."},"6":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPnCurrentInternalRequestBitsCAN330.htm",l:-1,t:"Nm_GetPnCurrentInternalRequestBits",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetPnCurrentInternalRequestBits Nm_GetPnCurrentInternalRequestBits   Function Syntax long Nm_GetPnCurrentInternalRequestBits(BYTE bufferOut[], dword bufferSize, dword numberOfBitsOut [])) Description This function allows to retrieve ..."},"7":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPrepareBusSleepModeIndCAN330.htm",l:-1,t:"Nm_PrepareBusSleepModeInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  Network Mode Indications  »  Nm_PrepareBusSleepModeInd Nm_PrepareBusSleepModeInd   Function Syntax void    Nm_PrepareBusSleepModeInd( ) Description These function indicate that the NM has entered the respective mode. Parameters — Return Values — ..."},"8":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetUserDataCAN330.htm",l:-1,t:"Nm_SetUserData",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modification of User Data  »  Nm_SetUserData Nm_SetUserData   Function Syntax void Nm_SetUserData(BYTE userData[], dword count) Description Set the user data this node sends in its NM  message  to the byte sequence given, where only the bytes after node ..."},"9":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetILSleepTimeCAN330.htm",l:-1,t:"Nm_SetILSleepTime",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer  »  Nm_SetILSleepTime Nm_SetILSleepTime   Function Syntax long Nm_SetILSleepTime(dword timeMS) Description This function changes the value for next reinitialization of the sleep timer. An on-going timer is not ..."},"10":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPnCurrentExternalRequestBitsCAN330.htm",l:-1,t:"Nm_GetPnCurrentExternalRequestBits",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetPnCurrentExternalRequestBits Nm_GetPnCurrentExternalRequestBits   Function Syntax long Nm_GetPnCurrentExternalRequestBits(long flags, byte bufferOut[], dword bufferSize, dword numberOfBitsOut [])) Description This function allows to ..."},"11":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmDisablePassiveModeCAN330.htm",l:-1,t:"Nm_DisablePassiveMode",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_DisablePassiveMode\n  \n Nm_DisablePassiveMode   Function Syntax long Nm_DisablePassiveMode( ) Description Stop using the passive mode: During Bus-Sleep, a node may be put into passive mode, or back to active mode. In passive mode, ..."},"12":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmRepeatMessageRequestCAN330.htm",l:-1,t:"Nm_RepeatMessageRequest",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  »  Nm_RepeatMessageRequest Nm_RepeatMessageRequest   Function Syntax long Nm_RepeatMessageRequest( ) Description Make the NM leave Normal Operation or Ready Sleep state and enter Repeat Message state, and set the repeat message bit. Parameters ..."},"13":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmControlBitVectorIndCAN330.htm",l:-1,t:"Nm_ControlBitVectorInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_ControlBitVectorInd Nm_ControlBitVectorInd   Function Syntax void Nm_ControlBitVectorInd(dword sourceId, dword controlBits) Description This function is called if a NM  message  with a non-zero ..."},"14":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmDisablePartialNetworkingCAN330.htm",l:-1,t:"Nm_DisablePartialNetworking",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_DisablePartialNetworking\n Nm_DisablePartialNetworking   Function Syntax long Nm_DisablePartialNetworking( ) Description Stop using partial networking for this node. All relevant parameters must be available ( INI Files Partial ..."},"15":{y:0,u:"../Content/Topics/CAN330/Basics/CANdbAttributesCAN330.htm",l:-1,t:"CANdb Attributes",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  CANdb Attributes CANdb Attributes   Introduction The communication matrix of a CAN network is usually described by a CANdb database. It defines the nodes present on the network, and allows specification of their behavior by attributes. Network attributes are ..."},"16":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPduRxInd2CAN330.htm",l:-1,t:"Nm_PduRxInd2",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_PduRxInd2 Nm_PduRxInd2   Function Syntax void Nm_PduRxInd2(dword busContext, dword shortId, dword longId, char name[], dword sourceNodeIdentifier, long repeatMessageBit, BYTE data[]) Description A call to ..."},"17":{y:0,u:"../Content/Topics/CAN330/Basics/INIfilesGlobalParametersCAN330.htm",l:-1,t:"INI Files - Global Parameters",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  INI Files - Global Parameters INI Files - Global Parameters   The following parameters are applied to the whole network.  They can be defined in each of the possible INI files. Section Parameter Description Default value [FEATURES] NM_BASE_ADDRESS CAN ID of first ..."},"18":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPnRequestBitsDefaultCAN330.htm",l:-1,t:"Nm_GetPnRequestBitsDefault",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Node Information  »  Nm_GetPnRequestBitsDefault Nm_GetPnRequestBitsDefault   Function Syntax long Nm_GetPnRequestBitsDefault( BYTE bufferOut[], dword bufferSize, dword pnRequestBitsLengthOut[]) Description The default partial network request bits (the PN ..."},"19":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetPnRequestBitsCAN330.htm",l:-1,t:"Nm_SetPnRequestBits",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modification of User Data  »  Nm_SetPnRequestBits Nm_SetPnRequestBits   Function Syntax long Nm_SetPnRequestBits(BYTE requestVector[]) Description Set the partial network request bits (the PN info range) within the user data. All relevant parameters must ..."},"20":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmFIIgnoreRepeatMessageBitCAN330.htm",l:-1,t:"NmFI_IgnoreRepeatMessageBit",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Fault Injection  »  NmFI_IgnoreRepeatMessageBit NmFI_IgnoreRepeatMessageBit   Function Syntax void NmFI_IgnoreRepeatMessageBit(long value) Description Defines the reaction upon received repeat message bit. Parameters Return Values — Example — Availability ..."},"21":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmDisableCommunicationCAN330.htm",l:-1,t:"Nm_DisableCommunication",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Communication Control  »  Nm_DisableCommunication Nm_DisableCommunication   Function Syntax long Nm_DisableCommunication( ) Description Turn the sending of NM messages off. The node will proceed as if the sending of the messages succeeded, though. This is ..."},"22":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmStateChangeNotificationCAN330.htm",l:-1,t:"Nm_StateChangeNotification",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  Notification of State Change  »  Nm_StateChangeNotification Nm_StateChangeNotification   Function Syntax void Nm_StateChangeNotification(long previousState, long currentState) Description Every time the NM state machine changes from one state to ..."},"23":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmCheckRemoteSleepIndCAN330.htm",l:-1,t:"Nm_CheckRemoteSleepInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_CheckRemoteSleepInd Nm_CheckRemoteSleepInd   Function Syntax long Nm_CheckRemoteSleepInd( ) Description Check if remote sleep (all nodes except this one allow transition to Bus-Sleep) has been detected, i.e. this node is the last one ..."},"24":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetNodeIdentifierCAN330.htm",l:-1,t:"Nm_GetNodeIdentifier",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetNodeIdentifier Nm_GetNodeIdentifier   Function Syntax long Nm_GetNodeIdentifier( ) Description Get the NM identifier of the node that sent the last received NM message. Parameters — Return Values Example — Availability  "},"25":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmNetworkStartIndCAN330.htm",l:-1,t:"Nm_NetworkStartInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Event Indications  »  Nm_NetworkStartInd Nm_NetworkStartInd   Function Syntax void Nm_NetworkStartInd( ) Description A NM  message  has been received while the node is in Bus-Sleep mode. Typically Nm_PassiveStartUp( ) will be called to let the ..."},"26":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPreSendIndCAN330.htm",l:-1,t:"Nm_PreSendInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_PreSendInd Nm_PreSendInd   Function Syntax void Nm_PreSendInd(WORD dlcInOut[], BYTE data[]) Description Directly before sending a NM message on the bus, this function is called to allow the CAPL program to ..."},"27":{y:0,u:"../Content/Topics/CAN330/Basics/INIfilesNodeSpecificParametersCAN330.htm",l:-1,t:"INI Files - Node Specific Parameters",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  INI Files - Node Specific Parameters INI Files - Node Specific Parameters   For advanced NM configurations, some parameters can be assigned to a specific node only. To achieve this, a new section must be added to the INI file that is named exactly as the node is ..."},"28":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmEnablePartialNetworkingCAN330.htm",l:-1,t:"Nm_EnablePartialNetworking",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_EnablePartialNetworking\n Nm_EnablePartialNetworking   Function Syntax long Nm_EnablePartialNetworking( ) Description Start using partial networking for this node. All relevant parameters must be available ( INI Files Partial Network ..."},"29":{y:0,u:"../Content/Topics/CAN330/Basics/INIfilesDefaultINIcontentCAN330.htm",l:-1,t:"INI Files - Default INI Content",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  INI Files - Default INI Content INI Files - Default INI Content   Default AsrNM33.INI content ; AUTOSAR NM - CANoe node layer DLL configuration file ; V3.3.2 [FEATURES] ; Reduce NM message load in normal operation state NM_BUS_LOAD_REDUCTION_ENABLED=0 ; If 1, node ..."},"30":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPnAffiliationCAN330.htm",l:-1,t:"Nm_GetPnAffiliation",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Node Information  »  Nm_GetPnAffiliation Nm_GetPnAffiliation   Function Syntax long Nm_GetPnAffiliation(long partialNetworkId) Description When using partial networking, a node filters NM messages according to the request mask of the message and its own ..."},"31":{y:0,u:"../Content/Topics/CAN330/Basics/INIfilesIntroductionCAN330.htm",l:-1,t:"INI Files - Introduction",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  INI Files - Introduction INI Files - Introduction   Main INI File On measurement start, the modeling library will read a number of parameters from the file AsrNM33.INI (when using Windows runtime kernel) or libAsrNM33.INI (when using Linux runtime kernel) which is ..."},"32":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmDeactivateBusLoadReductionCAN330.htm",l:-1,t:"Nm_DeactivateBusLoadReduction",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_DeactivateBusLoadReduction   \n Nm_DeactivateBusLoadReduction   Function Syntax long Nm_DeactivateBusLoadReduction( ) Description Stop using the bus load reduction algorithm. Parameters — Return Values Example — Availability  "},"33":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPduDataCAN330.htm",l:-1,t:"Nm_GetPduData",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetPduData Nm_GetPduData   Function Syntax long Nm_GetPduData(BYTE pduOut[], dword bufferLen) Description Copy the last received NM  message  completely into the buffer. Parameters Return Values Example — Availability  "},"34":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetLocalNodeIdentifierCAN330.htm",l:-1,t:"Nm_GetLocalNodeIdentifier",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Node Information  »  Nm_GetLocalNodeIdentifier Nm_GetLocalNodeIdentifier   Function Syntax dword Nm_GetLocalNodeIdentifier( ) Description Return the NM identifier of this node. Parameters — Return Values Node identifier, range 0x00 – 0xFF Example — ..."},"35":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmRequestBusSynchCAN330.htm",l:-1,t:"Nm_RequestBusSynch",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  »  Nm_RequestBusSynch Nm_RequestBusSynch   Function Syntax long Nm_RequestBusSynch( ) Description Send a NM message immediately to resynchronize all NM timeouts in the nodes on the network. The NM cycle timer is not restarted, i.e. the message ..."},"36":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmEnableCommunicationCAN330.htm",l:-1,t:"Nm_EnableCommunication",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Communication Control  »  Nm_EnableCommunication Nm_EnableCommunication   Function Syntax long Nm_EnableCommunication( ) Description Turn the sending of NM messages on. The node will proceed as if the sending of the messages succeeded, though. This is ..."},"37":{y:0,u:"../Content/Topics/CAN330/Functions/AutosarNMFunctionsCAN330.htm",l:-1,t:"Function Overview",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Functions »   Function Overview Function Overview   ON THIS PAGE: CAPL Functions Additional Functions These functions are implemented in the  modeling library  and can be called in CAPL programs. Note that all functions start with the prefix Nm_. Return Values All functions ..."},"38":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmCtrlSimulationOffCAN330.htm",l:-1,t:"Nm_CtrlSimulationOff",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modeling Library Configuration » Nm_CtrlSimulationOff Nm_CtrlSimulationOff   Function Syntax long Nm_CtrlSimulationOff( ) Description This function will turn off the complete NM simulation by the  modeling library . While the NM simulation is off, any API ..."},"39":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmEnablePassiveModeCAN330.htm",l:-1,t:"Nm_EnablePassiveMode\n",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_EnablePassiveMode\n Nm_EnablePassiveMode\n   Function Syntax long Nm_EnablePassiveMode( ) Description Start using the passive mode: During Bus-Sleep, a node may be put into passive mode, or back to active mode. In passive mode, the ..."},"40":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSendImmediateNmPDUCAN330.htm",l:-1,t:"Nm_SendImmediateNmPDU",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  »  Nm_SendImmediateNmPDU Nm_SendImmediateNmPDU   Function Syntax long Nm_SendImmediateNmPDU(dword flags, BYTE data[], dword bufferSize) Description Send immediately a NM PDU with the provided payload. Parameters Return Values ..."},"41":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetRequestStateCAN330.htm",l:-1,t:"Nm_GetRequestState",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetRequestState Nm_GetRequestState   Function Syntax long Nm_GetRequestState( ) Description The returned value indicates the NM request state the node is currently in. Parameters — Return Values Example — Availability  "},"42":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmNetworkModeIndCAN330.htm",l:-1,t:"Nm_NetworkModeInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  Network Mode Indications  »  Nm_NetworkModeInd Nm_NetworkModeInd   Function Syntax void         Nm_NetworkModeInd( ) Description This function indicate that the NM has entered the respective mode. Parameters — Return Values — Example Availability ..."},"43":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetSniPositionCAN330.htm",l:-1,t:"Nm_GetSniPosition",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  » Nm_GetSniPosition Nm_GetSniPosition   Function Syntax long Nm_GetSniPosition ( ) Description Returns the byte position PDU (zero-based numbering) of the Source Node Identifier (SNI) within the NM PDU. Parameters — ..."},"44":{y:0,u:"../Content/Topics/CAN330/Basics/StateDiagramCAN330.htm",l:-1,t:"State Diagram",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Basics »  State Diagram State Diagram   Introduction This diagram is a simplified version of the state diagram shown in the specification. It denotes possible state transitions for NM nodes, triggers for such transitions as well as the corresponding callback functions. ..."},"45":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmCtrlSimulationOnCAN330.htm",l:-1,t:"Nm_CtrlSimulationOn",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modeling Library Configuration » Nm_CtrlSimulationOn Nm_CtrlSimulationOn   Function Syntax long Nm_CtrlSimulationOn( ) Description This function will turn on the complete NM simulation by the  modeling library . While the NM simulation is off, any API ..."},"46":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetPncBitVectorLengthCAN330.htm",l:-1,t:"Nm_GetPncBitVectorLength",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  »  Nm_GetPncBitVectorLength Nm_GetPncBitVectorLength   Function Syntax long Nm_GetPncBitVectorLength( ) Description Returns the length (in bytes) of the Partial Network Cluster (PNC) bit vector. Parameters — Return Values ..."},"47":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetVerbosityCAN330.htm",l:-1,t:"Nm_SetVerbosity",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modeling Library Configuration » Nm_SetVerbosity Nm_SetVerbosity   Function Syntax dword Nm_SetVerbosity(dword selector) Description Set the  modeling library ’s verbosity. The higher the value, the more information is printed in the Write Window. ..."},"48":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPassiveStartUpCAN330.htm",l:-1,t:"Nm_PassiveStartUp",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  »  Nm_PassiveStartUp Nm_PassiveStartUp   Function Syntax long Nm_PassiveStartUp( ) Description Make the NM leave the Bus-Sleep mode and enter the Repeat Message state, without actually requesting the bus. Parameters — Return Values Example — ..."},"49":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPduRxIndCAN330.htm",l:-1,t:"Nm_PduRxInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_PduRxInd Nm_PduRxInd   Function Syntax void Nm_PduRxInd( dword  canId ,  dword identifier, long bRepeatMessageBit, BYTE data[]) Description A call to this function indicates the reception of a NM  message  ..."},"50":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetStateCAN330.htm",l:-1,t:"Nm_GetState",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetState Nm_GetState   Function Syntax long Nm_GetState( ) Description The returned value indicates the NM state the node is currently in. Parameters — Return Values Example — Availability  "},"51":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmIsPnEnabledCAN330.htm",l:-1,t:"Nm_IsPnEnabled",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Node Information  »  Nm_IsPnEnabled Nm_IsPnEnabled   Function Syntax long NM_IsPnEnabled( ) Description This function allows to retrieve information about whether partial networking is currently switched on or off for this node. Parameters — Return Values ..."},"52":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmConfigureILNotificationsCAN330.htm",l:-1,t:"Nm_ConfigureILNotifications",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer  »  Nm_ConfigureILNotifications Nm_ConfigureILNotifications   Function Syntax long Nm_ConfigureILNotifications(dword direction, dword mode) Description This function influences the coupling between NM and IL. The ..."},"53":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPreSendIndCommitCAN330.htm",l:-1,t:"Nm_PreSendIndCommit",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Callback Functions  »  NM Message Reception and Sending  »  Nm_PreSendIndCommit Nm_PreSendIndCommit   Function Syntax dword Nm_PreSendIndCommit (LONG\u0026 idInOut, WORD\u0026 dlcInOut, BYTE data[], DWORD\u0026 flagsInOut) Description Directly before sending a NM message on the bus, ..."},"54":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmActivateBusLoadReductionCAN330.htm",l:-1,t:"Nm_ActivateBusLoadReduction",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Configuration  » Nm_ActivateBusLoadReduction   \n Nm_ActivateBusLoadReduction   Function Syntax long Nm_ActivateBusLoadReduction( ) Description Start using the bus load reduction algorithm. Parameters — Return Values Example — Availability  "},"55":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetApplicationActivityCAN330.htm",l:-1,t:"Nm_SetApplicationActivity",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer  »  Nm_SetApplicationActivity Nm_SetApplicationActivity   Function Syntax long Nm_SetApplicationActivity(long isActive) Description This function sets the NM’s application activity. If the flag is set (isActive = ..."},"56":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmReinitSleepTimerCAN330.htm",l:-1,t:"Nm_ReinitSleepTimer",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Coupling between NM and Interaction Layer  »  Nm_ReinitSleepTimer Nm_ReinitSleepTimer   Function Syntax long Nm_ReinitSleepTimer(long isActive) Description This function reinitializes the timer until NM releases the network. Calling has no effect if there ..."},"57":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetControlBitVectorCAN330.htm",l:-1,t:"Nm_GetControlBitVector",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  »  Nm_SetControlBitVector Nm_GetControlBitVector   Function Syntax void Nm_GetControlBitVector(dword \u0026controlBits) Description This function allows setting the Control Bit Vector byte sent by this node to any value. Parameters ..."},"58":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetDLLInfoCAN330.htm",l:-1,t:"Nm_GetDLLInfo",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Modeling Library Configuration » Nm_GetDLLInfo Nm_GetDLLInfo   Function Syntax dword Nm_GetDLLInfo(dword selector) Description Return additional information about the  modeling library . Parameters Return Values Example — Availability  "},"59":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmIsPnCurrentlyRequestedCAN330.htm",l:-1,t:"Nm_IsPnCurrentlyRequested",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_IsPnCurrentlyRequested Nm_IsPnCurrentlyRequested   Function Syntax long Nm_IsPnCurrentlyRequested(long partialNetworkId, long flags) Description This function allows to retrieve information about the status of a certain partial network. ..."},"60":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmGetUserDataCAN330.htm",l:-1,t:"Nm_GetUserData",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM State  »  Nm_GetUserData Nm_GetUserData   Function Syntax long Nm_GetUserData(BYTE dataOut[], dword bufferLen) Description Copy the user data of the last received NM  message  into the output buffer. Parameters Return Values Example — Availability  "},"61":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmSetControlBitVectorCAN330.htm",l:-1,t:"Nm_SetControlBitVector",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  Non Standard Functionality  »  Nm_SetControlBitVector Nm_SetControlBitVector   Function Syntax void Nm_SetControlBitVector(dword controlBits) Description This function allows setting the Control Bit Vector byte sent by this node to any value. Parameters ..."},"62":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmNetworkReleaseCAN330.htm",l:-1,t:"Nm_NetworkRelease",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  » Nm_NetworkRelease Nm_NetworkRelease   Function Syntax long Nm_NetworkRelease( ) Description Indicate that the NM node doesn’t need the network, and allows it to enter Bus-Sleep mode. Parameters — Return Values Example — Availability  "},"63":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmNetworkRequestCAN330.htm",l:-1,t:"Nm_NetworkRequest",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  »  Nm_NetworkRequest Nm_NetworkRequest   Function Syntax long Nm_NetworkRequest( ) Description Indicate that the NM node needs the network. Parameters — Return Values Example — Availability  "},"64":{y:0,u:"../Content/Topics/CAN330/SupportedFeaturesCAN330.htm",l:-1,t:"Supported Features",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  » Supported Features Supported Features    "},"65":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmTransmitCAN330.htm",l:-1,t:"Nm_Transmit",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Control  »  Nm_Transmit Nm_Transmit   Function Syntax long Nm_Transmit( ) Description Send a NM message immediately and restart the NM cycle timer. Parameters — Return Values The specification defines that Nm_Transmit shall only be available under ..."},"66":{y:0,u:"../Content/Topics/CAN330/Functions/CAPLfunctionNmPNRequestIndCAN330.htm",l:-1,t:"Nm_PNRequestInd",i:0.0133333333333333,a:" AUTOSAR CAN NM 3.3.0  »  CAPL Functions  »  NM Event Indications  »  Nm_PNRequestInd Nm_PNRequestInd   Function Syntax void Nm_PNRequestInd(long partialNetworkId) Description Indication that a certain partial network is now requested. The indication will be only called if the partial network is ..."},});