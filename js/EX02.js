/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-05 15:41:36
 * @version $Id$
 */

function change_color()
{
	// Id.style.background="red";
var tables = document.getElementsByTagName("table");
     tables.style.background = 'red';
alert ("This document contains " + tables.length + " tables");
}