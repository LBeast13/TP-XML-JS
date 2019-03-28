<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Sun Mar 24 21:32:39 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	<xsl:param name="codeCCA2" />
	
	<xsl:template match="/">
	<html>
		<body>
		
			<table border="3"  width="100%" align="center" >
				<tr>
					<th>Nom</th>
					<th>Capitale</th>
					<th>Drapeau</th>
				</tr>
				<tr>
					<td>
						<xsl:value-of select="//country/name/common[../../codes/cca2=$codeCCA2]"/>
					</td>
					<td>
						<xsl:value-of select="//country/capital[../codes/cca2=$codeCCA2]"/>
					</td>
					<td>
						<xsl:element name="img">
							<xsl:attribute name="src">
							<xsl:text>http://www.geonames.org/flags/x/</xsl:text>
							<xsl:value-of select="translate($codeCCA2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')"/>
							<xsl:text>.gif</xsl:text>
							</xsl:attribute>
							<xsl:attribute name="alt"/>
							<xsl:attribute name="height">40</xsl:attribute>
							<xsl:attribute name="width">60</xsl:attribute>
						</xsl:element>
					</td>
				</tr>
			</table>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


