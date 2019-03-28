<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
<xsl:param name="nomPays" />
	
	<xsl:template match="/">
	<html>
		<body>
			
			
<p>
				<xsl:text>Nom officiel : </xsl:text> 
				<xsl:value-of select="//country/name/official[../common=$nomPays]"/>
				<br/>
				<xsl:text>Capitale : </xsl:text>
				<xsl:value-of select="//country/capital[../name/common=$nomPays]"/>
			
</p>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


