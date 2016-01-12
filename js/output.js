$("#sortable").sortable();
$("#sortable").disableSelection();

countToplam();



$('.add-gorev').on('keypress', function (e) {
    e.preventDefault
    if (e.which == 13) {
        if ($(this).val() != '') {
            var yeniItem = $(this).val();
            yeniTodo(yeniItem);
            countToplam();
        } else {
           
        }
    }
});

$('.todolist').on('change', '#sortable li input[type="checkbox"]', function () {
    if ($(this).prop('checked')) {
        var checkItem = $(this).parent().parent().find('label').text();
        $(this).parent().parent().parent().addClass('remove');
        tamamlanan(checkItem);
        countToplam();
    }
});


$('.todolist').on('click', '.remove-item', function () {
    removeItem(this);
});

function countToplam() {
    var count = $("#sortable li").length;
    $('.toplamIsSayisi').html(count);
}

function yeniTodo(text) {
    var li = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />' + text + '</label></div></li>';
    $('#sortable').append(li);
    $('.add-todo').val('');
}

function tamamlanan(tamamlananItem) {
    var done = tamamlananItem;
    var li = '<li>' + done + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
    $('#tamamlanan-item').append(li);
    $('.remove').remove();
}

function removeItem(element) {
    $(element).parent().remove();
}
$("#checkAll").click(function () {
    var array = [];

    $('#sortable li').each(function () {
        array.push($(this).text());
    });

    for (i = 0; i < array.length; i++) {
        $('#tamamlanan-item').append('<li>' + array[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    }

    $('#sortable li').remove();
    countToplam();
});
