$(document).ready(function(){$(".img_banner_servicios").on("mouseover",function(){$(this).fadeTo("slow",.8)}),$(".img_banner_servicios").on("mouseout",function(){$(this).fadeTo("slow",1)}),$("iframe").css("opacity",.7),$(".map").on("mouseover",function(){$(this).fadeTo("fast",1)}),$(".map").on("mouseout",function(){$(this).fadeTo("slow",.7)}),$(".dropdown-button").dropdown({inDuration:300,outDuration:225,hover:!0})});