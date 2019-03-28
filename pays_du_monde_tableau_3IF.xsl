<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Mon Mar 18 15:54:34 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	
	<xsl:template match="/">
	<html>
		<head> 
			<title> 
		    	Pays du monde 
		  	</title> 
		</head> 
		 
		<body style="background-color:white; ">  
			<div style="text-align:center;">
				<h1>Les pays du monde</h1> 
			      	<h2>Mise en forme par :</h2> 
			      	<p>Liam BETTE, Alexis BOSIO, Thibault REMY (B3XXX)</p>
		      	</div>
		      	<xsl:apply-templates select="//metadonnees"/>
		      	<xsl:apply-templates select="//countries"/>
		      	
		      	<!-- POUR CHAQUE CONTINENT -->
		      	<xsl:for-each select="(//continent[not(text()=preceding::continent/text())])[position() &lt; count(//continent[not(self::*=../preceding::*)])+1]">
				<xsl:variable name="currContinent" select="current()"/>
				<br/>
				
				<!-- TITRE CONTINENT -->
				<h3>Pays du continent : <xsl:value-of select="$currContinent"/> par sous-régions : </h3>
				<xsl:if test="$currContinent!=''">
					<!-- POUR CHAQUE SOUS-CONTINENT -->
					<xsl:for-each select="//subregion[not(text()=preceding::subregion/text())]">
						<xsl:if test="../continent = $currContinent">
							<xsl:apply-templates select="current()"/>
						</xsl:if>
					</xsl:for-each>
				</xsl:if>
				<xsl:if test="$currContinent=''">
					<xsl:apply-templates select="(../subregion[.=''])[position()&lt; 2]"/>
				</xsl:if>
			</xsl:for-each>
		</body> 
	</html>
	</xsl:template>
	
	
<!-- Template pour les metadonnées -->
	<xsl:template match="metadonnees">
		 <p style="text-align:center; color:blue;">
			Objectif : <xsl:value-of select="objectif"/>
		 </p><hr/>
	</xsl:template>
	
	<!-- Template d'affiche de l'entête du tableau de chaque sous-région -->
	<xsl:template match="//subregion">
		<h4>
			<!-- Nom du sous-continent -->
			<xsl:value-of select="current()"/>
			
			<!-- Nombre de pays pour ce sous-continent -->
			<xsl:text> (</xsl:text>
			<xsl:value-of select="count(../../../country[infosContinent/subregion=current()])"/>
			<xsl:text> pays)</xsl:text>
		</h4>
		<table border="3"  width="100%" align="center" >
			<tr>
				<th>Nº</th>
				<th>Nom</th>
				<th>Capitale</th>
				<th>Voisins</th>
				<th>Coordonnées</th>
				<th>Drapeau</th>
			</tr>
			<xsl:apply-templates select="//country[infosContinent/subregion=current()]"/>
		</table>
	</xsl:template>
	
	<!-- Template d'affiche d'un pays (Ligne dans le tableau -->
	<xsl:template match="//country">
		<tr>
			<!-- Numéro du pays -->
			<td>
 
				<xsl:value-of select="position()"/>
			</td>
			
			<!-- Nom du pays -->
			<td>
				<!-- Nom commun -->
				<span style="color:green">
					<xsl:value-of select="name/common"/>
				</span>
				
				<!-- Nom officiel -->
				<xsl:text> (</xsl:text>
				<xsl:value-of select="name/official"/>
				<xsl:text>)</xsl:text>
				<br/>
				
				<!-- Nom en Français (s'il existe) -->
				<xsl:if test="name/native_name/@lang = 'fra'">
					<span style="color:brown">
						<xsl:text> Nom français : </xsl:text>
						<xsl:value-of select="name/native_name[@lang='fra']/official"/>
					</span>
				</xsl:if>
			</td>
			
			<!-- Nom de la capitale du pays -->
			<td>
				<xsl:value-of select="capital"/>
			</td>
			
			<!-- Liste des voisins -->
			<td>
				<!-- Cas où le pays a des voisins -->
				<xsl:if test="count(borders) &gt; 0">
					<xsl:for-each select="borders/neighbour">
						<xsl:value-of select="../../../country[codes/cca3=current()]/name/common"/>
						<xsl:if test="position() != last() ">
							<xsl:text>, </xsl:text>
						</xsl:if>
					</xsl:for-each>
				</xsl:if>
				
				<!-- Cas où le pays n'a pas de voisins et a accès à la mer -->
				<xsl:if test="count(borders) = 0 and landlocked='false'">
					<xsl:text>Île</xsl:text>
				</xsl:if>
				
			</td>
			
			<!-- Coordonnées -->
			<td>
				<xsl:text>Latitude :</xsl:text><xsl:value-of select="coordinates/@lat"/>
 <br />
				<xsl:text>Longitude :</xsl:text><xsl:value-of select="coordinates/@long"/>
			</td>
			
			<!-- Drapeaux -->
			<td>
				<xsl:element name="img">
					<xsl:attribute name="src">
						<xsl:text>http://www.geonames.org/flags/x/</xsl:text>
						<xsl:value-of select="translate(codes/cca2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')"/>
						<xsl:text>.gif</xsl:text>
					</xsl:attribute>
					<xsl:attribute name="alt"/>
					<xsl:attribute name="height">40</xsl:attribute>
					<xsl:attribute name="width">60</xsl:attribute>
				</xsl:element>
			</td>
		</tr>
	</xsl:template>
	
	<!-- Statistiques -->
	<xsl:template match="//countries">
		<hr/>

		<xsl:text>Pays avec 6 voisins : </xsl:text>

		<xsl:for-each select="country[count(borders/neighbour) = 6]">	

			<xsl:value-of select="current()/name/common"/>

			<xsl:if test="position() != last() ">
				<xsl:text>, </xsl:text>
			</xsl:if>

		</xsl:for-each>

		<br/><br/>

		

		<xsl:text>Pays ayant le nom le plus court : </xsl:text>

		
		<xsl:variable name="minLength">
		  <xsl:for-each select="country/name/common">
		    <xsl:sort select="string-length(current()/text())" data-type="number" />
		    <xsl:if test="position() = 1">
		      <xsl:value-of select="text()" />
		    </xsl:if>
		  </xsl:for-each>
		</xsl:variable>

		<xsl:value-of select="$minLength"/>

		<hr/>
	</xsl:template>

	
</xsl:stylesheet>


