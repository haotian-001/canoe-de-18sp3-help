define({"7218":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILSetVTStatus.htm",l:-1,t:"VTIL_SetVTStatus",i:6.17629467184684E-05,a:"CAPL Functions  »  ISO11783  »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_SetVTStatus VTIL_SetVTStatus   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long VTIL_SetVTStatus(dword cycleTime); // form 1 long VTIL_SetVTStatus(dword cycleTime, pg VT12 pgWithNewContent); // form 2 long ..."},"7219":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSvtsSetThreshold.htm",l:-1,t:"vtsSetThreshold",i:6.25820067109357E-05,a:"CAPL Functions  »  VT System  » vtsSetThreshold vtsSetThreshold   Valid for :  CANoe DE   •  CANoe:lite DE Function Syntax long vtsSetThreshold (char Target[], dword Group, double Threshold); Description Sets the threshold value for differentiating between high and low levels of a group of channels ..."},"7220":{y:0,u:"../Content/Topics/CANoeCANalyzer/Diagnostics/LIN/LINDiagnostics.htm",l:-1,t:"LIN Diagnostic Functionality",i:6.63587712524542E-05,a:"LIN  » Diagnostic Functionality LIN Diagnostic Functionality   Valid for :  CANoe DE General To implement a LIN diagnostic tester you can use the  CANoe  Diagnostic Functionality . Add a  diagnostic description  or a  basic diagnostic device  to your configuration and use the Diagnostic Feature Set ..."},"7221":{y:0,u:"../Content/Topics/CANoeCANalyzer/Interfaces/MATLAB/CANoeCOlibrary/MATLABcoLibFunctionCall.htm",l:-1,t:"CO Function Call (MATLAB Integration Block)",i:3.56559411809168E-05,a:"MATLAB Integration Package  »  Communication Object Library  » CO Function Call CO Function Call   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE  "},"7222":{y:0,u:"../Content/Topics/SampConf/Sensor/SENT/SENTrc.htm",l:-1,t:"SENT - Rolling Counter",i:3.92041597614142E-05,a:"Sample Configurations  »  Sensor  » SENT - Rolling Counter SENT - Rolling Counter   Valid for :  CANoe DE   •  CANoe:lite DE Between sensor and ECU, the RollingCounter signal is transferred by SENT protocol. During every transfer, the value of this signal is increased by one from 0 to 255, and then ..."},"7223":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectUI.htm",l:-1,t:"UI (COM Object)",i:0.000280934373620929,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » UI UI Application  » UI Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Description The UI object represents the user interface in your  CANoe DE product . Properties Methods Events — Example Example —  ..."},"7224":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/GNSSNodeLayer/Functions/CAPLfunctionGNSSshutdown.htm",l:-1,t:"GNSSShutDown",i:3.21536745237703E-05,a:"CAPL Functions  »  J1939  »  GNSS NL  » GNSSShutDown GNSSShutDown   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax dword GNSSShutDown(); Description The function removes the node from the network. Parameters — Return Values Error code Example  "},"7225":{y:0,u:"../Content/Topics/CANoeCANalyzer/ISO11783/VirtualTerminalWindow/PageObjectPool.htm",l:-1,t:"Object Pool",i:3.91949086593862E-05,a:"ISO11783  »  Virtual Terminal Overview  »  Virtual Terminal Window  » \n Page Object Pool Object Pool   Valid for :  CANoe DE On this page  you can see the object pool of the current working set. On the \n left side the name and the identifier of the objects are displayed. If \n an object is selected ..."},"7226":{y:0,u:"../Content/Topics/CAPLFunctions/ADFX/EventProcedures/CAPLfunctionOnAfdxPacket.htm",l:-1,t:"\u003cOnAfdxPacket\u003e",i:0.000100321089143259,a:"CAPL Functions  »  AFDX  » \u003cOnAfdxPacket\u003e \u003cOnAfdxPacket\u003e (Callback)   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax void \u003cOnAfdxPacket\u003e( long dir, long line, int64 timestamp, long bag, long afdxFlags, long packet ); Description This callback is ..."},"7227":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionFileGetString.htm",l:-1,t:"fileGetString",i:4.9925523137786E-05,a:"CAPL Functions  »  General  »  Function Overview  » fileGetString fileGetString   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long fileGetString (char buff[], long buffsize, dword fileHandle); Method  Syntax (Dynamic) long File::GetString(char ..."},"7228":{y:0,u:"../Content/Topics/SampConf/ISO11783/CANoe/GNSS/GNSSFileReplay/gnssfilereplay_cn.htm",l:-1,t:"GNSS File Replay",i:3.84183191292396E-05,a:"Sample Configurations  »  ISO11783  » GNSS File Replay GNSS File Replay   Valid for :  CANoe DE This sample configuration demonstrates the usage of the GNSS node layer and the GNSS Monitor by using a GNSS logging file. Introduction After measurement start the desktop Simulation is activated. Then ..."},"7229":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTStringToAscii.htm",l:-1,t:"mostStringToAscii",i:3.21268845524622E-05,a:"CAPL Function Overview »  MOST  » mostStringToAscii mostStringToAscii   Valid for :  CANoe DE Function Syntax long mostStringToAscii(byte sourceData[], long sourceDatalen, char buffer[], long buffersize); Description Convert MOST string to ASCII string. Unsupported characters in the input data are ..."},"7230":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsLssAddMasterResponseSwitchStateGlobal.htm",l:-1,t:"coTfsLssAddMasterResponseSwitchStateGlobal",i:3.77403241333249E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsLssAddMasterResponseSwitchStateGlobal coTfsLssAddMasterResponseSwitchStateGlobal (Level 2)   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long ..."},"7231":{y:0,u:"../Content/Topics/CANoeCANalyzer/CANopen/TfsNodelayer/OdTests.htm",l:-1,t:"Object Dictionary Tests",i:2.50135281676509E-05,a:"CANopen  »  Test Feature Set Node Layer  » Object Dictionary Tests Object Dictionary Tests   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE This test modules allows checking existent and hidden object dictionary \n entries. A simple but not complete check can be done ..."},"7232":{y:0,u:"../Content/Topics/CANoeCANalyzer/LIN/LIN_LIN-Channel_Baudrate.htm",l:-1,t:"Configuring the Baudrate of a LIN Channel",i:3.98952405237045E-05,a:"LIN  » Configuration » Configuring the Baudrate of a LIN Channel Configuring the Baudrate of a LIN Channel   Valid for :   CANoe DE The initial baudrate for a LIN channel can be set in several ways. If more than one method is configured, the actual value used depends on the following priority order ..."},"7233":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerTC/Functions/CAPLfunctionIso11783TCILEnableNameManagement.htm",l:-1,t:"TCIL_EnableNameManagement",i:4.93556294244784E-05,a:"CAPL Functions  »  ISO11783  »  Task Controller Interaction Layer (TC IL)   » TCIL_EnableNameManagement TCIL_EnableNameManagement   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax dword TCIL_EnableNameManagement(dword enable ); // form 1 dword TCIL_EnableNameManagement(dword enable, dword ..."},"7234":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/EventProcedures/CAPLfunctionOnSOMEIPEventGroupSubscribedConsumerSide.htm",l:-1,t:"on SOMEIP_EventGroupSubscribedConsumerSide",i:2.80539834309274E-05,a:"CAPL Functions  »  Communication Objects  » on SOMEIP_EventGroupSubscribedConsumerSide on SOMEIP_EventGroupSubscribedConsumerSide (obsolete)   Valid for :  CANoe DE Function Syntax on SOMEIP_EventGroupSubscribedConsumerSide \u003cEventGroup\u003e; Description The event procedure is called at the consumer when ..."},"7235":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionRegisterQueueOverflowHandler.htm",l:-1,t:"RegisterQueueOverflowHandler",i:1.94177847439328E-05,a:"CAPL Functions  »  General  »  Function Overview  » RegisterQueueOverflowHandler RegisterQueueOverflowHandler   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long RegisterQueueOverflowHandler(char aCallbackfunction[], long upperLimit, long lowerLimit); Description Registers a user-defined ..."},"7236":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILNodeDisturbChecksum.htm",l:-1,t:"ILNodeDisturbChecksum",i:6.13285616662193E-05,a:"CAPL Functions  »  CANoe IL  » ILNodeDisturbChecksum ILNodeDisturbChecksum   Valid for :  CANoe DE   •  CANoe4SW DE   •   Function Syntax long ILNodeDisturbChecksum(dbMsg aMessage, char aSigGroupName[], long checksumType, long disturbanceMode, long disturbanceCount, long disturbanceValue); // form 1 ..."},"7237":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLfunctionSomeIpSDDesubscribeEventGroup.htm",l:-1,t:"SomeIpSDDesubscribeEventGroup",i:2.49782356766865E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » SomeIpSDDesubscribeEventGroup SomeIpSDDesubscribeEventGroup   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long SomeIpSDDesubscribeEventGroup( dword cevgHandle ); Description The Event Group is unregistered at the node (consumer). The existing ..."},"7238":{y:0,u:"../Content/Topics/CANoeCANalyzer/LIN/HowTos/LIN_Simulating_LIN-Master.htm",l:-1,t:"How to Simulate a LIN Master",i:3.23042198068173E-05,a:"LIN  »  More How to\u0027s ...  » How to Simulate a LIN Master How to Simulate a LIN Master   Valid for :   CANoe DE   •  CANoe4SW DE General On a LIN network, a bus node (network node) has to act as the LIN master. The LIN master is responsible for transmitting LIN headers on the LIN network which are ..."},"7239":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTPPlatformManager/ConnectionAddNetworkDevice.htm",l:-1,t:"Edit Connection Parameters",i:7.67314962897308E-05,a:"Vector Tool Platform  » Connection »  General|Connection Settings  » Edit Connection Parameters Edit Connection Parameters   Valid for :  CANoe DE   •  CANoe:lite DE Manual configuration allows you to add, delete or change additional IP network devices that are not automatically found on the ..."},"7240":{y:0,u:"../Content/Topics/CANoeCANalyzer/Diagnostics/DiagnosticWindow/DiagnosticWindow.htm",l:-1,t:"Diagnostic Window",i:0.000327206065253008,a:"Diagnostics with your  CANoe DE product  »  Functional Overview  »  Basics  » Diagnostic Window Diagnostic Window Ribbon | Diagnostics \u0026 XCP Tab |Diagnostic Window Valid for :  CANoe DE  "},"7241":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTGenerateLockError.htm",l:-1,t:"mostGenerateLockError",i:6.31339455406811E-05,a:"CAPL Functions  »  MOST  » mostGenerateLockError mostGenerateLockError   Valid for :  CANoe DE Function Syntax long mostGenerateLockError(long channel, long unmodtime, \n long modtime, long repeat); Description Starts (repeat \u003e 0) or stops (repeat = 0) generation of Light Unmodulated-Modulated ..."},"7242":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateWeldingDetectionReqDin.htm",l:-1,t:"SCC_CreateWeldingDetectionReq_DIN",i:6.19504965856256E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreateWeldingDetectionReq_DIN SCC_CreateWeldingDetectionReq_DIN   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long SCC_CreateWeldingDetectionReq_DIN \n( byte ..."},"7243":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/SimulationSetup/SimulationSetupProgrammingBusParameters.htm",l:-1,t:"Programming of Bus Parameters",i:0.000100232210699392,a:" CANoe DE Product Families  » Programming of Bus Parameters Programming of Bus Parameters   Valid for :  CANoe DE The data source in online mode is the CAN expansion card. Primarily it delivers messages received from the CAN bus together with the time of receipt. Furthermore, upon request it can ..."},"7244":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Filter/IPFilterPagePortFilter.htm",l:-1,t:"IP Filter: Port Filter",i:5.37550187167676E-05,a:"IP Filter  » Port Filter IP Filter: Port Filter   Valid for :  CANoe DE   •  CANoe4SW DE Protocol Filter Port Filter Packet Filter   On the Port Filter page, you can configure filter conditions for UDP and TCP packets. The channel, direction, ports and addresses of the packets are configurable here."},"7245":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateChargingStatusReqIso.htm",l:-1,t:"SCC_CreateChargingStatusReq_ISO",i:6.19504965856256E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreateChargingStatusReq_ISO SCC_CreateChargingStatusReq_ISO   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long SCC_CreateChargingStatusReq_ISO ( byte ..."},"7246":{y:0,u:"../Content/Topics/CANoeCANalyzer/Diagnostics/DoIP/DiagnosticsDoIPNetworkSettings.htm",l:-1,t:"DoIP/HSFZ Settings",i:0.000218128668699795,a:"Diagnostics with your  CANoe DE product  »  Functional Overview  »  DoIP  » DoIP/HSFZ Settings DoIP/HSFZ Settings Ribbon :  Diagnostics \u0026 XCP Tab | Diagnostics/ISO TP Configuration |Diagnostics over IP/High-Speed-Fahrzeugzugang/Vehicle Ethernet| Administrate Diagnostic Descriptions ..."},"7247":{y:0,u:"../Content/Topics/CAPLFunctions/J1587/EventHandler/CAPLfunctionOnJ1587ErrorMessage.htm",l:-1,t:"on J1587ErrorMessage",i:8.08571907860246E-05,a:"CAPL Functions  »  J1587  » on J1587ErrorMessage on J1587ErrorMessage   Valid for :  CANoe DE   •  CANoe4SW DE Description Defines the event handler for an erroneous J1708 message. The error code is contained in J1587ErrorMessage::J1587_Error. For passing this message to other node, output(this) ..."},"7248":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/EventProcedures/CAPLfunctionOnTransmitAnySubscribe.htm",l:-1,t:"on transmit_any_subscribe",i:4.25202143323852E-05,a:"CAPL Functions  »  Distributed Objects  » on transmit_any_subscribe on transmit_any_subscribe   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax on transmit_any_subscribe \u003cInterface Member\u003e; Description This handler is called whenever an instance of a ..."},"7249":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/Functions/CAPLfunctionSOMEIPSubscribeEventGroup.htm",l:-1,t:"SOMEIP_SubscribeEventGroup",i:6.23507491191613E-05,a:"CAPL Functions  »  Communication Objects  » SOMEIP_SubscribeEventGroup SOMEIP_SubscribeEventGroup (obsolete)   Valid for :  CANoe DE Function Syntax long SOMEIP_SubscribeEventGroup(consumedEventGroupRef * eventGroup); // form 1 long SOMEIP_SubscribeEventGroup(consumedServiceRef * service, char[] ..."},"7250":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsSetFailControl.htm",l:-1,t:"coTfsSetFailControl",i:4.30655206696207E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsSetFailControl coTfsSetFailControl   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long coTfsSetFailControl( dword controlValue ); Description Determines the behavior of CANopen test ..."},"7251":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIPRouteDeleteGateway.htm",l:-1,t:"IPRouteDeleteGateway",i:4.44327162332142E-05,a:"CAPL Functions  »  TCP/IP API  » IPRouteDeleteGateway IPRouteDeleteGateway   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long IPRouteDeleteGateway( dword dest, dword mask ); // form 1 long IPRouteDeleteGateway( byte dest[], dword prefix ); // form 2 long IPRouteDeleteGateway(IP_Address ..."},"7252":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestGetLastWaitElapsedTimeNS.htm",l:-1,t:"TestGetLastWaitElapsedTimeNS",i:4.26227132722139E-05,a:"CAPL Functions  »  Test Feature Set  » TestGetLastWaitElapsedTimeNS TestGetLastWaitElapsedTimeNS   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax float TestGetLastWaitElapsedTimeNS(); Description Indicates the period of time for which the last wait ..."},"7253":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestResetSysVarValue.htm",l:-1,t:"TestResetSysVarValue",i:0.000145238290360498,a:"CAPL Functions  »  Test Feature Set  » TestResetSysVarValue TestResetSysVarValue   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long TestResetSysVarValue (sysvar aSysVar); Description Resets the system variable to initial value. If no initial value ..."},"7254":{y:0,u:"../Content/Topics/CANoeCANalyzer/LIN/LINProtocols/LIN_Support_of_Spec_20.htm",l:-1,t:"LIN 2.0 (Protocol)",i:5.41201980518056E-05,a:"LIN  » Protocol » LIN 2.0 LIN 2.0 (Protocol)   Valid for :   CANoe DE   •  CANoe4SW DE Support of LIN protocol version 2.0 Simulation  and  analysis  of a LIN 2.0 network. Direct support of 2.0  LDF files . Support of NCF files for slave conformance tests. Support of LIN 2.0  Reconfiguration . ..."},"7255":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/Hardware/car2xHwConfig/car2xTransPowerRestriction.htm",l:-1,t:"Transmission Power Restrictions",i:4.4191530454712E-05,a:"Car2x  »  Network Hardware Configuration Setup Page  » Transmission Power Restrictions Transmission Power Restrictions   Valid for :  CANoe DE Transmit power restrictions applied in tolling areas In order to avoid interference between Car2x (DSRC) and ITS-G5A/B (tolling) radio communication, the ..."},"7256":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclGetConsumedService.htm",l:-1,t:"cclGetConsumedService",i:3.84106167087807E-05,a:" CANoe DE Product Families  »  C Library API  »  Functions  » cclGetConsumedService cclGetConsumedService   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax cclConsumedServiceID cclGetConsumedService(cclServiceID serviceID, int32_t consumerID, int32_t ..."},"7257":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectLinProtocolVersion.htm",l:-1,t:"LinProtocolVersion (COM Object)",i:3.04905757566724E-05,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » LinProtocolVersion LinProtocolVersion Application  »  Configuration  »  TestSetup  »  TestEnvironments  »  TestEnvironment  »  TestModules  »  LinSlaveConformanceTesters  »  LinSlaveConformanceTester  » LinProtocolVersion Application  »  ..."},"7258":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/CANopenBasic/Functions/CAPLfunctionsCANopenLssSwitchModeGlob.htm",l:-1,t:"CANopenLssSwitchModeGlob",i:5.09741206890608E-05,a:"CAPL Functions  »  CANopen  »  Basic Functions  » CANopenLssSwitchModeGlob CANopenLssSwitchModeGlob   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax dword CANopenLssSwitchModeGlob (byte mode); Description Sets LSS slaves to the configuration mode or ..."},"7259":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/EventProcedures/CAPLfunctionOnAbstractFieldSubscribed.htm",l:-1,t:"on Abstract_FieldSubscribed",i:3.56241247917335E-05,a:"CAPL Functions  »  Communication Objects  » on Abstract_FieldSubscribed on Abstract_FieldSubscribed (obsolete)   Valid for :  CANoe DE Function Syntax on Abstract_FieldSubscribed \u003cField\u003e; Description The event procedure is called at the provider when a field is subscribed by a consumer and abstract ..."},"7260":{y:0,u:"../Content/Topics/SampConf/Ethernet/CANoe/Chat/ChatTLScn.htm",l:-1,t:"TLS Chat (CAPL)",i:6.34561410198856E-05,a:"Sample Configurations  »  Ethernet  » TLS Chat (CAPL) TLS Chat (CAPL)   Valid for :  CANoe DE The sample configuration shows how you can use TLS sockets of the TCP/IP API. Desktops This configuration contains the following desktops: Setup The configuration includes several nodes: The nodes use the ..."},"7261":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionFDXClientHandleTcp.htm",l:-1,t:"FDXClientHandleTcp",i:5.00814376791557E-05,a:"CAPL Functions  »  General  »  Function Overview  » FDXClientHandleTcp FDXClientHandleTcp   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long FDXClientHandleTcp(dword ipv4Address, dword port); // form 1 long FDXClientHandleTcp(byte ipv6Address[], ..."},"7262":{y:0,u:"../Content/Topics/CAPLFunctions/Car2x/Functions/CAPLfunctionC2xGetTokenBitString.htm",l:-1,t:"C2xGetTokenBitString",i:4.7444548079885E-05,a:"CAPL Functions  »  Car2x  » C2xGetTokenBitString C2xGetTokenBitString   Valid for :  CANoe DE   •   Function Syntax long C2xGetTokenBitString( long packet, char protocolDesignator[], char tokenDesignator[], long bufferSize, byte buffer[]); // form 1 long C2xGetTokenBitString( long packet, char ..."},"7263":{y:0,u:"../Content/Topics/SampConf/Sensor/SENT/SENTBasic.htm",l:-1,t:"SENT Basic (Sensor)",i:3.92041597614142E-05,a:"Sample Configurations  »  Sensor  » SENT Basic (Sensor) SENT Basic (Sensor)   Valid for :  CANoe DE   •  CANoe:lite DE The SENT interface is a unidirectional, asynchronous interface, which has been standardized under the designation SAE J2716. Introduction The  .Sensor  option must be activated for ..."},"7264":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionResetCRCMode.htm",l:-1,t:"ResetCRCMode",i:6.02960827160345E-05,a:"CAPL Functions  »  Sensor  » ResetCRCMode ResetCRCMode   Valid for :  CANoe DE   •  CANoe4SW DE Method  Syntax SensorErrorCode sysvarSensorNamespace.ResetCRCMode(); Description Resets the CRC mode of a sensor to the initially configured value. If short serial messages are selected, this method also ..."},"7265":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectVideoWindow.htm",l:-1,t:"VideoWindow (COM Object)",i:7.23159378628896E-05,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » VideoWindow VideoWindow Application  »  Configuration  »  MeasurementSetup  »  VideoWindows  » VideoWindow Valid for :  CANoe DE   •  CANoe4SW DE Description The VideoWindow object represents a single  Video Window  of the current ..."},"7266":{y:0,u:"../Content/Topics/CANoeCANalyzer/CANopen/OptionCANopen/referencesCANopen.htm",l:-1,t:"References (CANopen)",i:0.000105469510181602,a:" CANoe DE Product Families  »  CANopen  » References References   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE /1/ help /2/ CiA301 V4.2.0 Application Layer and Communication Profile /3/ CiA302 V3.3.0 Framework for  CANopen  Managers and Programmable CANopen Devices ..."},"7267":{y:0,u:"../Content/Topics/CAPLFunctions/A429/EventProcedures/CAPLfunctionA429OnA429Error.htm",l:-1,t:"on a429error",i:3.7992494494296E-05,a:"CAPL Functions  »  A429  » on a429error on a429error   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Description The event procedure on a429error is called on every event related to a general ARINC error (e.g. if a hardware queue overflow or a transmission error ..."},"7268":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclConsumedServiceGetID.htm",l:-1,t:"cclConsumedServiceGetID",i:0.000120033325929827,a:" CANoe DE Product Families  »  C Library API  »  Functions  » cclConsumedServiceGetID cclConsumedServiceGetID   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax typedef int32_t cclConsumedServiceID; cclConsumedServiceID cclConsumedServiceGetID(const ..."},"7269":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Methods/CAPLfunctiondistObjRefConnect.htm",l:-1,t:"distObjRef::Connect",i:8.30183363377837E-05,a:"CAPL Functions  »  Distributed Objects  » distObjRef::Connect distObjRef::Connect   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Method  Syntax void  distObjRef ::Connect(); Description This is a collective operation that connects every member of the object with ..."},"7270":{y:0,u:"../Content/Topics/CAPLFunctions/KLine/Functions/CAPLfunctionKLineSet5BaudAddressTester.htm",l:-1,t:"KLine_Set5BaudAddressTester",i:4.41060831293164E-05,a:"CAPL Functions  »  K-Line  » KLine_Set5BaudAddressTester KLine_Set5BaudAddressTester   Valid for :  CANoe DE Function Syntax long KLine_Set5BaudAddressTester( Byte fiveBaudAddress) Description Sets the 5 baud address for the 5 baud init pattern. Parameters Return Values On success 0, otherwise a ..."},"7271":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/obdimmonitor/obdimmOverview.htm",l:-1,t:"J1939 OBD-I/M Monitor",i:0.000232493226203077,a:" CANoe DE Product Families  » J1939 OBD-I/M Monitor J1939 OBD-I/M Monitor Ribbon | Diagnostics \u0026 XCP Tab |J1939|OBD-I/M Monitor|View / New Valid for :  CANoe DE"},"7272":{y:0,u:"../Content/Topics/QuickStartGuide/07AnalysisOfSignalValuesInTheDataWindow/07AnalysisOfSignalValuesInTheDataWindow.htm",l:-1,t:"Analyze Signal Values in Data Window",i:8.09607688522454E-05,a:"Quick Start Guide  » Analyze Signal Values in Data Window Analyze Signal Values in Data Window   Valid for :  CANoe DE Besides the use of symbolic message names, the associated database can also be used to analyze signal values. The purpose of the Data Window (Analysis desktop or Analysis ribbon ..."},"7273":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/ProtocolMonitor/ProtocolMonitorQueryLanguage.htm",l:-1,t:"Protocol Monitor Query Language",i:7.59400535990914E-05,a:" CANoe DE Product Families  » … »  Protocol Monitor  »  Text Search / Connections View  » Protocol Monitor Query Language Protocol Monitor Query Language   Valid for :  CANoe DE With the Protocol Monitor Query Language you can describe conditions for the selection of objects. You can formulate ..."},"7274":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestWaitForTimeout.htm",l:-1,t:"TestWaitForTimeout",i:0.000146809891570823,a:"CAPL Functions  »  Test Feature Set  » TestWaitForTimeout TestWaitForTimeout   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long TestWaitForTimeout(dword aTimeout); Description Waits until the expiration of the specified timeout time. Parameters ..."},"7275":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionWriteClear.htm",l:-1,t:"writeClear",i:6.42558814490145E-05,a:"CAPL Functions  »  General  »  Function Overview  » writeClear writeClear   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax void writeClear(dword sink); Description Clears the contents of the specified page in the Write Window. You can use the ..."},"7276":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreatePaymentServiceSelectionReqISO.htm",l:-1,t:"SCC_CreatePaymentServiceSelectionReq_ISO",i:6.19504965856256E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreatePaymentServiceSelectionReq_ISO SCC_CreatePaymentServiceSelectionReq_ISO   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long ..."},"7277":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkQueryStatProbeIntervalAvg.htm",l:-1,t:"ChkQuery_StatProbeIntervalAvg",i:4.39233133460341E-05,a:"CAPL Functions  »  Test Service Library  »  Status Report Functions  » ChkQuery_StatProbeIntervalAvg ChkQuery_StatProbeIntervalAvg   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax double ChkQuery_StatProbeIntervalAvg (dword aCheckId) Method  Syntax check.QueryStatProbeIntervalAvg() ..."},"7278":{y:0,u:"../Content/Topics/CANoeCANalyzer/ISO11783/InteractiveTaskController/ITC.htm",l:-1,t:"Interactive Task Controller (ISO11783)",i:0.000506434950822647,a:"ISO11783  »  Task Controller  » Interactive Task Controller Interactive Task Controller   Valid for :  CANoe DE The window of the Interactive Task Controller is divided in two parts. The left side shows an overview of the available information. The device for which a device description is available ..."},"7279":{y:0,u:"../Content/Topics/SampConf/CAN/CANoe/CANSystemDemo/CANSystemDemoStartCN.html",l:-1,t:"System Configuration (CAN)",i:0.00060979744275919,a:" CANoe DE Product Families  »  Sample Configurations  »  CAN  » System Configuration (CAN) System Configuration (CAN)   Valid for :  CANoe DE The System Configuration (CAN) sample configuration demonstrates the simulation of two CAN networks (PowerTrain and Comfort) in a vehicle. Furthermore, it ..."},"7280":{y:0,u:"../Content/Topics/CAPLFunctions/Security/CallbackHandler/CAPLfunctionOnSecurityLocalApplicationProtocolTxFinished.htm",l:-1,t:"OnSecurityLocalApplicationProtocolTxFinished",i:0.000103333863435529,a:"CAPL Functions  »  Security  » OnSecurityLocalApplicationProtocolTxFinished OnSecurityLocalApplicationProtocolTxFinished   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax void OnSecurityLocalApplicationProtocolTxFinished(char applicationProtocolName[], long result) Description This callback ..."},"7281":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLFunctionOnSomeIpNewServerAep.htm",l:-1,t:"OnSomeIpNewServerAep",i:5.21469883701064E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » OnSomeIpNewServerAep OnSomeIpNewServerAep   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax void OnSomeIpNewServerAep(dword aepHandle, IP_Endpoint localIPEndpoint); Description This callback gets called when a server-side SOME/IP Application ..."},"7282":{y:0,u:"../Content/Topics/SampConf/ADAS/ADASSystemDYNA4.htm",l:-1,t:"ADAS System (DYNA4)",i:7.31619511919252E-05,a:"Sample Configurations  »  ADAS  » ADAS System (DYNA4) ADAS System (DYNA4)   Valid for :  CANoe DE   •  CANoe:lite DE Preconditions At measurement start the configuration tries to start the 3D environment DYNAanimation. If you have installed DYNAanimation, DYNAanimation opens and you see the DYNA4 ..."},});