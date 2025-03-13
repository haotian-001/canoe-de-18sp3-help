	function startDemoLoader(cmd)
	{
		myUri = "vph://context=" + window.location.href + "&cmd=\"" + cmd+ "\"";  
		window.location = myUri;
	}

    function startVTTLauncher(cmd) 
    {
    	myUri = "vph://product=vVIRTUALtarget&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
	    window.location = myUri;
    } 

	function startCANoeLauncher(cmd) 
	{
		myUri = "vph://product=CANoe&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;
	} 

	function startCANoeLauncherDE(cmd) 
	{
		myUri = "vph://lang=DE&product=CANoe&context=" + window.location.href + "&cmd=\"" + cmd + "\"";
		window.location = myUri;
	}

	function startCANoeLauncherEN(cmd) 
	{
		myUri = "vph://lang=EN&product=CANoe&context=" + window.location.href + "&cmd=\"" + cmd + "\"";
		window.location = myUri;
	}

	function startCANoeLiteLauncher(cmd)
	{
		myUri = "vph://product=CANoeLite&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;
	}
	
	function startCANoeLiteLauncherDE(cmd)
	{
		myUri = "vph://lang=DE&product=CANoeLite&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;
	}
	
	function startCANoeLiteLauncherEN(cmd)
	{
		myUri = "vph://lang=EN&product=CANoeLite&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;
	}

	function startCANalyzerLauncher(cmd) 
	{
		myUri = "vph://product=CANalyzer&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;

	} 

	function startCANoe4SWLauncher(cmd) 
	{
		myUri = "vph://product=CANoe4SW&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;

	} 

	function startCANoe4SWLiteLauncher(cmd) 
	{
		myUri = "vph://product=CANoe4SWLite&context=" + window.location.href + "&cmd=\"" + cmd + "\"";  
		window.location = myUri;
	
	} 

	function startCANoeOEMLauncher (oem, cmd)
	{
		myUri = "vph://product=CANoe&oem=\"" + oem + "\"&context=" + window.location.href + "&cmd=\"" + cmd + "\""; 
		window.location = myUri;
	}

	function startCANoeSubToolLauncherDE (tool, cmd){ 
		myUri = "vph://lang=DE&product=CANoe&tool=\"" + tool + "\"&context=" + window.location.href + "&cmd=\"" + cmd + "\"";     
		window.location = myUri; 
	}

	function startCANoeSubToolLauncherEN (tool, cmd){ 
		myUri = "vph://lang=EN&product=CANoe&tool=\"" + tool + "\"&context=" + window.location.href + "&cmd=\"" + cmd + "\"";     
		window.location = myUri; 
	}