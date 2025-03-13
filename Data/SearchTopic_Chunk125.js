define({"8195":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939InteractionLayer/Functions/CAPLfunctionJ1939ILDelayTxTpCts.htm",l:-1,t:"J1939ILDelayTxTpCts",i:5.80345404683448E-05,a:"CAPL Functions  »  J1939  »  J1939 IL  » J1939ILDelayTxTpCts J1939ILDelayTxTpCts   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long J1939ILDelayTxTpCts( long ctsToDelay, long timeout); //Form 1 long J1939ILDelayTxTpCts( dbNode node, long ctsToDelay, long timeout); //Form 2 Description ..."},"8196":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINSetManualChecksum.htm",l:-1,t:"linSetManualChecksum",i:0.000102196449410186,a:"CAPL Functions  »  LIN  » linSetManualChecksum linSetManualChecksum   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax void linSetManualChecksum(linFrame linFrame, byte csValue); Description Sets a checksum (that is usually not a correct one) for a LIN frame. Parameters Return Values — Example ..."},"8197":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/Functions/CAPLfunctionJ1939InitializeMultiPG.htm",l:-1,t:"J1939InitializeMultiPG",i:0.000149933382775745,a:"CAPL Functions  »  J1939  »  Function Overview  » J1939InitializeMultiPG J1939InitializeMultiPG   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax J1939InitializeMultiPG(message* multiPG, byte sa); // (form 1) J1939InitializeMultiPG(message* multiPG, byte prio, byte da, byte sa); // (form 2) ..."},"8198":{y:0,u:"../Content/Topics/SampConf/CAN/CANoe/Diagnostics/UDSBasicCN.htm",l:-1,t:"UDS Diagnostic Basic",i:6.23161379126494E-05,a:" CANoe DE Product Families  » Sample Configurations  »  CAN  » CAN Diagnostics » UDS Diagnostic Basic UDS Diagnostic Basic   Valid for :  CANoe DE Introduction This sample configuration shows the following use cases: Writing a diagnostic parameter (physical \u0026 symbolical representation). Writing a ..."},"8199":{y:0,u:"../Content/Topics/SampConf/ISO11783/CANoe/MoreExamples/AuxiliaryDemo/AuxiliaryDemo_CN.htm",l:-1,t:"Auxiliary",i:5.49837665213304E-05,a:"Sample Configurations  »  ISO11783  » Auxiliary Auxiliary   Valid for :  CANoe DE This sample configuration demonstrates the usage of different auxiliary inputs. Via the  Virtual Terminal  the functions of a Working Set Master are assigned to the controls of the auxiliary inputs. All nodes are using ..."},"8200":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509CertificateSetIssuerDN.htm",l:-1,t:"X509Certificate_SetIssuerDN",i:6.37855983827949E-05,a:"CAPL Functions  »  Security  » X509Certificate_SetIssuerDN X509Certificate_SetIssuerDN   Valid for :  CANoe DE   •  CANoe4SW DE Method  Syntax dword X509Certificate_SetIssuerDN(qword objectHandle, qword newValue) Description Setter function for the Issuer field of the X.509 Certificate handle. Can ..."},"8201":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectApplicationSpecificModules.htm",l:-1,t:"ApplicationSpecificModules (COM Object)",i:3.91719960977979E-05,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » ApplicationSpecificModules ApplicationSpecificModules Application  »  Configuration  »  VTSystem  »  AvailableModules  » ApplicationSpecificModules Valid for :  CANoe DE   •  CANoe:lite DE Description The ApplicationSpecificModules object ..."},"8202":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/J1939CANfd/1939CANfd.htm",l:-1,t:"J1939 CAN FD",i:5.97137527780485E-05,a:"J1939  » J1939 CAN FD J1939 CAN FD   Valid for :  CANoe DE J1939 CAN FD Your  CANoe DE product  starting with version 15.3 supports J1939 based on CAN FD according to the specifications SAE J1939-17 and SAE J1939-22. CAN FD enables transmission rates of the user data of up to 2000 kBaud with a ..."},"8203":{y:0,u:"../Content/Topics/CANoeCANalyzer/SCOPE/ScopeTestModuleIntegration.htm",l:-1,t:"Integration in Test Modules (Scope)",i:4.62380049515732E-05,a:"Scope  » Integration in Test Modules Integration in Test Modules   Valid for :  CANoe DE   •  CANoe:lite DE You can address the Scope Window via a test module CAPL file: Use  scopeConnect()  to establish a USB connection. Use  scopeTriggerNow()  to trigger. Use  testWaitForScopeEvent()  to check ..."},"8204":{y:0,u:"../Content/Topics/CANoeCANalyzer/Interfaces/IOPiggy/IOPiggyTechnicalData.htm",l:-1,t:"IOpiggy: Technical Data",i:5.37392804413158E-05,a:"IOpiggy  » Technical Data IOpiggy: Technical Data   Valid for :  CANoe DE   •  CANoe:lite DE  "},"8205":{y:0,u:"../Content/Topics/CANoeCANalyzer/Connectivity/HTTPClientAPI.htm",l:-1,t:"HTTP Client API (Connectivity)",i:0.000199034526479041,a:" CANoe DE Product Families  »  Connectivity  » HTTP Client API HTTP Client API   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Introduction Using the Client API allows sending client requests within the HTTP communication. The protocol-specific information of the ..."},"8206":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ribbon/RibbonHome.htm",l:-1,t:"Home (Ribbon)",i:0.000218144655421666,a:"Ribbon  » Home Home Ribbon : Home Tab Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Available for  CANoe DE Available for  CANoe:lite DE Available for  CANoe4SW:lite DE  "},"8207":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestWaitForNextCall.htm",l:-1,t:"TestWaitForNextCall",i:7.66626684907644E-05,a:"CAPL Functions  »  Test Feature Set  » TestWaitForNextCall TestWaitForNextCall   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long TestWaitForNextCall(providedMethodRef * method, dword timeoutMs); // form 1 long TestWaitForNextCall(distObjMethodRef ..."},"8208":{y:0,u:"../Content/Topics/CANoeCANalyzer/Connectivity/DDSModelingDOs.htm",l:-1,t:"Distributed Objects (DOs) for Data Distribution Service (DDS) (Connectivity)",i:0.000188226271851265,a:" CANoe DE Product Families  »  Connectivity  »  DDS Protocol  » Distributed Objects (DOs) Distributed Objects (DOs) for Data Distribution Service (DDS)   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE DDS Modeling with Distributed Objects DDS participants are modeled ..."},"8209":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSomeIPEventGroupProviderGetFields.htm",l:-1,t:"cclSomeIPEventGroupProviderGetFields",i:3.84106167087807E-05,a:" CANoe DE Product Families  »  C Library API  »  Functions  » cclSomeIPEventGroupProviderGetFields cclSomeIPEventGroupProviderGetFields   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax int32_t ..."},"8210":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/gnsssimulator/functions/gsFileReplay.htm",l:-1,t:"Playing Back Logging Files",i:7.17302800325276E-05,a:"J1939  »  GNSS \n Simulator  » Playing Back Logging Files Playing Back Logging Files   Valid for :  CANoe DE You can use GNSS Simulator to play back GNSS logging files \n with position information, for example information that was created with \n the GNSS Monitor. Position data can be modified with a ..."},"8211":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939TableTime.htm",l:-1,t:"J1939TableTime",i:1.98403856426931E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939TableTime J1939TableTime   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax dword J1939TableTime( char busName[] ); Description The function returns the time stamp of the last received \"Request for \n Address Claim\". Use this function to determine, ..."},"8212":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIpsecPolicyDatabaseAdd.htm",l:-1,t:"ipsecPolicyDatabaseAdd",i:4.44327162332142E-05,a:"CAPL Functions  »  TCP/IP API  » ipsecPolicyDatabaseAdd ipsecPolicyDatabaseAdd   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long ipsecPolicyDatabaseAdd(IP_Endpoint source, dword sourcePrefix, IP_Endoint destination, dword destPrefix, char[] nextLayerProtocol, char[] policy); Description ..."},"8213":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILPDDConnectSysVarWithSection.htm",l:-1,t:"Iso11783IL_PDDConnectSysVarWithSection",i:3.64379022360864E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Interaction Layer   » Iso11783IL_PDDConnectSysVarWithSection Iso11783IL_PDDConnectSysVarWithSection   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long Iso11783IL_PDDConnectSysVarWithSection(dword ddiOfCondensedState, dword elementNumber, dword ..."},"8214":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINWakeInternal.htm",l:-1,t:"linWakeupInternal",i:3.88772263535608E-05,a:"CAPL Functions  »  LIN  » linWakeupInternal linWakeupInternal   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long linWakeupInternal(); Description Wakes up the LIN bus without sending any wakeup signals. Parameters — Return Values On success, a value unequal to zero, otherwise zero. ..."},"8215":{y:0,u:"../Content/Topics/CAPLFunctions/MapWindowAPI/Functions/CAPLfunctionSetMapObjectFillColor.htm",l:-1,t:"SetMapObjectFillColor",i:5.52525977232079E-05,a:"CAPL Functions  »  Map Window API  » SetMapObjectFillColor SetMapObjectFillColor   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long SetMapObjectFillColor( long handle, float fillColor ); Description Sets the fill color of a map object or the text ..."},"8216":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectConnectedPiggy.htm",l:-1,t:"ConnectedPiggy (COM Object)",i:4.10946019013883E-05,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » ConnectedPiggy ConnectedPiggy Application  »  Configuration  »  VTSystem  »  ConnectedModules  »  ConnectedModule  »  ConnectedPiggies  » ConnectedPiggy Valid for :  CANoe DE   •  CANoe:lite DE Description The ConnectedPiggy object ..."},"8217":{y:0,u:"../Content/Topics/CAPLFunctions/IP/AUTOSARethIL/Functions/CAPLFunctionAREthTlsAuthenticateAsServerWithConfiguration.htm",l:-1,t:"AREthTlsAuthenticateAsServerWithConfiguration",i:7.16591447751169E-05,a:"CAPL Functions  »  Ethernet  »  AUTOSAR Eth IL  » AREthTlsAuthenticateAsServerWithConfiguration AREthTlsAuthenticateAsServerWithConfiguration   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax AREthTlsAuthenticateAsServerWithConfiguration(dword connectionHandle,char configuration[]) ..."},"8218":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILNodeResetPDUTimingCyclic.htm",l:-1,t:"ILNodeResetPDUTimingCyclic",i:5.12029919899885E-05,a:"CAPL Functions  »  CANoe IL  » ILNodeResetPDUTimingCyclic ILNodeResetPDUTimingCyclic   Valid for :  CANoe DE   •  CANoe4SW DE   •   Function Syntax long ILNodeResetPDUTimingCyclic (dbMsg dbMessage, long TrueOrFalse) Description Resets the cyclic-timing to the values from the database. Possibly two ..."},"8219":{y:0,u:"../Content/Topics/Shared/RibbonHomeFindReplace.htm",l:-1,t:"Find and Replace",i:8.38548754505921E-05,a:" CANoe DE Product Families  » … »   CANoe DE Product Families  »  CAPL Browser  » Find and Replace Find and Replace Ribbon :  Home Tab |Find and Replace Valid for :  CANoe DE   •  CANoe:lite DE Find The options in this window specify whether the search covers only whole words and whether ..."},"8220":{y:0,u:"../Content/Topics/CAPLFunctions/MapWindowAPI/Functions/CAPLfunctionSetMapObjectLineColor.htm",l:-1,t:"SetMapObjectLineColor",i:5.52525977232079E-05,a:"CAPL Functions  »  Map Window API  » SetMapObjectLineColor SetMapObjectLineColor   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long SetMapObjectLineColor( long handle, float lineColor ); Description Sets the line color of a map object. Parameters ..."},"8221":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionResetSignalPolarity.htm",l:-1,t:"ResetSignalPolarity",i:6.02960827160345E-05,a:"CAPL Functions  »  Sensor  » ResetSignalPolarity ResetSignalPolarity   Valid for :  CANoe DE   •  CANoe4SW DE Method  Syntax SensorErrorCode sysvarSensorNamespace.ResetSignalPolarity(); Description Resets the signal polarity of a simulated sensor to the initially configured value. Parameters — ..."},"8222":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Methods/CAPLfunctiondistObjBlueprintAddVirtualNetwork.htm",l:-1,t:"distObjBlueprint::AddVirtualNetwork",i:7.43913518486439E-05,a:"CAPL Functions  »  Distributed Objects  » distObjBlueprint::AddVirtualNetwork distObjBlueprint::AddVirtualNetwork   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Method  Syntax void  distObjBlueprint  *::AddVirtualNetwork(char networkPath[]); void  distObjBlueprint  ..."},"8223":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionStartDOReplayFile.htm",l:-1,t:"StartDOReplayFile",i:6.28750534487148E-05,a:"CAPL Functions  »  General  »  Function Overview  » StartDOReplayFile StartDOReplayFile   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax dword StartDOReplayFile (char filename[]); // form 1 dword StartDOReplayFile (char filename[], dword role); // ..."},"8224":{y:0,u:"../Content/Topics/CAPLFunctions/IP/Methods/CAPLfunctionProtocolOptionalStructureInit.htm",l:-1,t:"ethernetPacket::protocol::optional-structure::Init",i:0.000121044816863098,a:"CAPL Functions  »  Ethernet  »  Function Overview  » ethernetPacket::protocol::optional-structure::Init ethernetPacket::protocol::optional-structure::Init   Valid for :  CANoe DE   •  CANoe4SW DE Method  Syntax long  ethernetPacket .\u003c protocol \u003e.\u003coptional-structure\u003e.Init(); Description \nAdd a ..."},"8225":{y:0,u:"../Content/Topics/CAPLFunctions/CAN/CAPLfunctionsCANOverview.htm",l:-1,t:"CAN CAPL Functions",i:0.00300578917311882,a:"CAPL Functions  » CAN CAPL Functions CAN CAPL Functions   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE ON THIS PAGE: Bus Statistics  [▲ back] CANdb API  [▲ back] Event Procedures [▲ back] General Functions  [▲ back] Hardware API  [▲ back] Selectors  [▲ back] ..."},"8226":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Data/DataWindowColumns.htm",l:-1,t:"Columns (Data Window)",i:0.000199069821471147,a:" CANoe DE Product Families  » … »  Data Window  » Columns Columns   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE You can use the context menu of the table head to configure how columns are displayed. You can configure the following columns: The Adapt Column ..."},"8227":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939InteractionLayer/Functions/CAPLfunctionJ1939ILDelayTxTpAbort.htm",l:-1,t:"J1939ILDelayTxTpAbort",i:5.80345404683448E-05,a:"CAPL Functions  »  J1939  »  J1939 IL  » J1939ILDelayTxTpAbort J1939ILDelayTxTpAbort   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long J1939ILDelayTxTpAbort( long timeout); //Form 1 long J1939ILDelayTxTpAbort( dbNode node, long timeout); //Form 2 Description Delays transmitting of the ..."},"8228":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestGetWaitLinReceiveErrData.htm",l:-1,t:"TestGetWaitLinReceiveErrData",i:0.000117568904931459,a:"CAPL Functions  »  Test Feature Set  » TestGetWaitLinReceiveErrData TestGetWaitLinReceiveErrData   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long TestGetWaitLinReceiveErrData (linReceiveError apEvent); // form 1 long TestGetWaitLinReceiveErrData (dword index, linReceiveError apEvent); ..."},"8229":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestCaseComment.htm",l:-1,t:"TestCaseComment",i:4.86609613328193E-05,a:"CAPL Functions  »  Test Feature Set  » TestCaseComment TestCaseComment   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax TestCaseComment (char aComment[]); TestCaseComment (char aComment[], message aMsg); TestCaseComment (char aComment[], mostMessage ..."},"8230":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/CAPLfunctionsTCPIPSocketOptionsSOL_Vector.htm",l:-1,t:"Socket Options: SOL_VECTOR",i:3.70500397167198E-05,a:"CAPL Functions  »  TCP/IP API  »  Socket Options  » SOL_VECTOR Socket Options: SOL_VECTOR   Valid for :  CANoe DE   •  CANoe4SW DE The following socket options can be set at the SOL_VECTOR option level in CAPL. They influence the behavior of the socket. For all BOOL typed options a non-zero value ..."},"8231":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939ECUGoOnline.htm",l:-1,t:"J1939ECUGoOnline",i:3.67047220529058E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939ECUGoOnline J1939ECUGoOnline   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax dword J1939ECUGoOnline( dword ecuHandle, dword newAddress ); Description After this function has been called, the logical ECU logs on onto the CAN bus. It must be ..."},"8232":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsLssWaitForIdentifyNonConfRemoteSlaveReq.htm",l:-1,t:"coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest",i:3.59431583256632E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest (Level 2)   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax long ..."},"8233":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/j1939basics/defineCommRelations.htm",l:-1,t:"Define Communication Relationships",i:7.74563750537712E-05,a:"CANoe  »  J1939  »  Define a J1939 Database  » Define Communication Relationships Define Communication Relationships   Valid for :  CANoe DE The setup of communication relationships is absolutely necessary for the definition of a network and the code generation. Here it is specified which messages ..."},"8234":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509CertificateGetSerialNo.htm",l:-1,t:"X509Certificate_GetSerialNo",i:6.37855983827949E-05,a:"CAPL Functions  »  Security  » X509Certificate_GetSerialNo X509Certificate_GetSerialNo   Valid for :  CANoe DE   •  CANoe4SW DE Method  Syntax dword X509Certificate_GetSerialNo(qword objectHandle, byte[] outBuffer, dword outBufferLength) Description Getter function for the Serial Number field of the ..."},"8235":{y:0,u:"../Content/Topics/Shared/CAPL/General/64BitDatatypes.htm",l:-1,t:"64 Bit Data Types",i:3.13524373155984E-05,a:"CAPL Introduction  »  Data Types for Variables  » 64 Bit Data Types 64 Bit Data Types   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Generally, these data types can be used in exactly the same way as all other integer types. int64 : A signed 64-bit integer type ..."},"8236":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLfunctionSomeIpSetValueDWord.htm",l:-1,t:"SomeIpSetValueDWord",i:7.03353588465901E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » SomeIpSetValueDWord SomeIpSetValueDWord   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long SomeIpSetValueDWord( dword objectHandle, char valuePath[], dword value ); Description This function can be used to set a raw value in the object ..."},"8237":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/MOSTTroubleshootingXMLFunctionCatalog.htm",l:-1,t:"MOST Troubleshooting: The Integration of an XML Function Catalog fails",i:3.31536746708342E-05,a:"MOST  »  Troubleshooting  » The Integration of an XML Function Catalog fails MOST Troubleshooting: The Integration of an XML Function Catalog fails   Valid for :  CANoe DE The program aborts the loading of a MOST XML function catalog. The logging file created when the XML file is loaded provides ..."},"8238":{y:0,u:"../Content/Topics/CANoeCANalyzer/Diagnostics/DiagISOTPconfig/DiagSettings/DiagDescTL.htm",l:-1,t:"Transport Layer (CAN)",i:8.07133678898089E-05,a:"Diagnostics with your  CANoe DE product  »  Functional Overview  »  Protocol Settings  » Transport Layer (CAN) Transport Layer (CAN) Ribbon :  Diagnostics \u0026 XCP Tab | Diagnostics/ISO TP Configuration | Administrate Diagnostic Descriptions |Assignments|Transport Layer (CAN) Valid for :  CANoe DE ..."},"8239":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/diagmonitor/dmTabActiveDTC.htm",l:-1,t:"Active DTC",i:0.00015779428799398,a:"J1939  »  J1939 DTC Monitor  » Active DTC Active DTC   Valid for :  CANoe DE The page Active DTC of the J1939 DTC Monitor shows the error codes that were transmitted in the last received diagnostic message 1 (active error codes).  "},"8240":{y:0,u:"../Content/Topics/vCDL/Language/vCDLEndPoints.htm",l:-1,t:"Endpoints (vCDL)",i:0.000100183880230657,a:" CANoe DE Product Families  »  vCDL  » vCDL 1.4 (deprecated) »  Language  » Endpoints Endpoints   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Endpoints identify the communication endpoints of a Service, Signal or PDU. Their type (and keyword) depends on the ..."},"8241":{y:0,u:"../Content/Topics/CAPLFunctions/J1587/Functions/CAPLfunctionJ1587SetJ1587TP.htm",l:-1,t:"setJ1587TP",i:8.42893305702651E-05,a:"CAPL Functions  »  J1587  » setJ1587TP setJ1587TP   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax void setJ1587TP( j1587Param param, dword mode ); Description Selects the setting for the  transport protocol  to use when sending a J1587 parameter via the output function. Parameters ..."},"8242":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandWait.htm",l:-1,t:"Wait (Visual Sequencer Command)",i:5.50125011715773E-05,a:"Visual Sequencer  »  Commands  » Wait Wait   Valid for :  CANoe DE   •  CANoe4SW DE Description Waits a specified length of time. Objects Operators Operands — Example Availability  "},"8243":{y:0,u:"../Content/Topics/SampConf/CAN/CANoe/Scope/BitmaskAnalysisCANxl.htm",l:-1,t:"Bitmask Analysis (CAN XL - Scope)",i:6.86034882992482E-05,a:" CANoe DE Product Families  »  Sample Configurations  »  CAN  » Scope » Bitmask Analysis (CAN XL - Scope) Bitmask Analysis (CAN XL - Scope)   Valid for :  CANoe DE Introduction The sample configuration can only be used in real mode. This requires a VN1670 with current CAN XL driver and a PicoScope ..."},"8244":{y:0,u:"../Content/Topics/CAPLFunctions/Media/Properties/CAPLfunctionAudioChannelMask.htm",l:-1,t:"AudioChannelMask",i:3.19690844901981E-05,a:"CAPL Functions  »  Media API  »  Properties  » AudioChannelMask AudioChannelMask   Valid for :  CANoe DE   •  CANoe4SW DE Property AudioChannelMask Description In an audio media type, specifies the assignment of audio channels to speaker positions. Data Type dword The value of this property is a ..."},"8245":{y:0,u:"../Content/Topics/CANoeCANalyzer/LIN/LINProtocols/SAEJ2602v2012.htm",l:-1,t:"SAE J2602:2012 (LIN Protocol)",i:5.41201980518056E-05,a:"LIN  » Protocol » SAE J2602:2012 SAE J2602:2012 (LIN Protocol)   Valid for :   CANoe DE   •  CANoe4SW DE Support of LIN Protocol version SAE J2602:2012 Simulation  and  Analysis  of an SAE J2602:2012 network Direct Support of SAE J2602:2012  LDF Files Support of SAE J2602:2012 NCF Files for  Slave ..."},"8246":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTAsNTFFunctionCheck.htm",l:-1,t:"mostAsNtfFunctionCheck",i:8.453970443667E-05,a:"CAPL Functions  »  MOST  » mostAsNtfFunctionCheck mostAsNtfFunctionCheck   Valid for :  CANoe DE Function Syntax long mostAsNtfFunctionCheck(long deviceID, long fblockID, \n long instID, long functionID); Description Checks whether a notification client (deviceID) is registered in the notification ..."},"8247":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclAbstractSubscribeField.htm",l:-1,t:"cclAbstractSubscribeField",i:3.84106167087807E-05,a:" CANoe DE Product Families  »  C Library API  »  Functions  » cclAbstractSubscribeField cclAbstractSubscribeField   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax int32_t cclAbstractSubscribeField(cclConsumedFieldID consumedFieldID); Description ..."},"8248":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSomeIPSetEventGroupSubscribedHandler.htm",l:-1,t:"cclSomeIPSetEventGroupSubscribedHandler",i:3.84106167087807E-05,a:" CANoe DE Product Families  »  C Library API  »  Functions  » cclSomeIPSetEventGroupSubscribedHandler cclSomeIPSetEventGroupSubscribedHandler   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE Function Syntax typedef ..."},"8249":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILControlSimulationOff.htm",l:-1,t:"ILControlSimulationOff",i:9.54163065759955E-05,a:"CAPL Functions  »  CANoe IL  » ILControlSimulationOff ILControlSimulationOff   Valid for :  CANoe DE   •  CANoe4SW DE   •   Function Syntax long ILControlSimulationOff() Description The simulation of the IL is stopped. After that no other function to \n control the IL has an effect to the IL. To ..."},"8250":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILsetmsgdelaytime.htm",l:-1,t:"Iso11783IL_SetMsgDelayTime",i:3.64379022360864E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Interaction Layer   » Iso11783IL_SetMsgDelayTime Iso11783IL_SetMsgDelayTime   Valid for :  CANoe DE   •  CANoe4SW DE Function Syntax long Iso11783IL_SetMsgDelayTime( dbMsg dbMessage, dword delayTime ); Description Sets the message delay time in ms. Parameters ..."},"8251":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTGenerateBusloadAsync.htm",l:-1,t:"mostGenerateBusloadAsync",i:7.29070937125833E-05,a:"CAPL Functions  »  MOST  » mostGenerateBusloadAsync mostGenerateBusloadAsync   Valid for :  CANoe DE Function Syntax long mostGenerateBusloadAsync (long channel, long pkts); Description The function sends cyclical packets to the asynchronous channel. Use the  mostConfigureBusloadAsync()  or  ..."},"8252":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Filter/IPFilterPagePacketFilter.htm",l:-1,t:"IP Filter: Packet Filter",i:5.95433854340866E-05,a:"IP Filter  » Packet Filter IP Filter: Packet Filter   Valid for :  CANoe DE   •  CANoe4SW DE On the Packet Filter page you can configure filter conditions for the protocol fields of Ethernet packets. The protocol fields in which address and numeric values may be input are configurable here. You can ..."},"8253":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Trigger/TriggerModeSingle.htm",l:-1,t:"Trigger Mode: Single Trigger",i:5.60191945276126E-05,a:"Trigger Configuration  »  Trigger Mode Single Trigger Trigger Mode: Single Trigger   Valid for :  CANoe DE   •  CANoe:lite DE   •  CANoe4SW DE   •  CANoe4SW:lite DE In the Single Trigger trigger \n mode all those data occurring before and after a specific trigger is logged. You can enter the ..."},"8254":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectERTNodeConfiguration.htm",l:-1,t:"ERTNodeConfiguration (COM Object)",i:3.76710461457599E-05,a:" CANoe DE Product Families  »  COM Interface  »  Objects  » ERTNodeConfiguration ERTNodeConfiguration Application  »  Configuration  »  SimulationSetup  »  Nodes »  Node  » ERTNodeConfiguration Valid for :  CANoe DE   •  CANoe4SW DE Description The ERTNodeConfiguration object represents the ERT ..."},"8255":{y:0,u:"../Content/Topics/SampConf/Car2x/CANoe/C2xDay1Scenarios.htm",l:-1,t:"Car2x Application Testing - Day 1 Scenarios ",i:3.09510143478423E-05,a:"Sample Configurations  »  Car2x  » Car2x Application Testing - Day 1 Scenarios  Car2x Application Testing - Day 1 Scenarios    Valid for :  CANoe DE Introduction At the start of the measurement, the system switches to the desktop Measurement and simulates an Ego vehicle driving on a predefined ..."},"8256":{y:0,u:"../Content/Topics/SampConf/CANopen/CANoe/BatteryCharger/BattCharOverview.htm",l:-1,t:"Battery Charger",i:5.90499540447639E-05,a:"Sample Configurations  »  CANopen  » Battery Charger Battery Charger   Valid for :  CANoe DE   •  CANoe:lite DE The sample configuration simulates a much simplified battery charger \n according to CiA418/419. The simulation was created by the simulation \n generator and then extended by the ..."},"8257":{y:0,u:"../Content/Topics/SampConf/Ethernet/CANoe/UDPNMBasicAutosar/UDPNMBasicAutosarCN.htm",l:-1,t:"Basic AUTOSAR UDP Network Management",i:4.90770148844882E-05,a:"Sample Configurations  »  Ethernet  »  Basic AUTOSAR UDP Network Management   Valid for :  CANoe DE ARXML contains the network description for four nodes that use the UDP NM and each send a PDU cyclically. Two partial networks are used. The VGW node wakes all other nodes; the HU node only wakes the ..."},"8258":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINActivateFlashMode.htm",l:-1,t:"linActivateFlashMode",i:6.06785896891242E-05,a:"CAPL Functions  »  LIN  » linActivateFlashMode linActivateFlashMode   Valid for :  CANoe DE Function Syntax dword linActivateFlashMode(byte activate); Description This function activates flash mode on high-speed capable transceivers. Note that in flash mode such a transceiver will use faster rising ..."},"8259":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandMap.htm",l:-1,t:"Map (Visual Sequencer Command)",i:3.26434390113001E-05,a:"Visual Sequencer  »  Commands  » Map Map   Valid for :  CANoe DE   •  CANoe4SW DE Description The Map command maps system variables to other system variables or signals. Value changes of the source variable are written to the target variable immediately. The value mapping to the target variable is ..."},});