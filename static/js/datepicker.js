$(document).ready(function(){
    //$(".input-group.date").datepicker("setDate", new Date());
    //$(".input-group.date").datepicker({ autoclose: true, todayHighlight: true, todayBtn: true, "setDate": new Date() });
    $(".input-group.date").datepicker().on('changeDate', function(ev){
        $(".input-group.date").datepicker('hide');
    });
});