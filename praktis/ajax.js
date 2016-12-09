/*global $*/
function myFunction(){
	/*global $*/
$( document ).ready(function() {
    var ingre = document.getElementById("ingredient"); 
    $.ajax({
        url:`process.php`,
        type:`Get`,
        data: {ingred:ingre},
        datatype:html,
        success:function(result){
            $("#title").html(result);
        }
    })
  
});
}
