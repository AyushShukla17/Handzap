$('.userBox').click(function () {
    $(this).toggleClass('open');
});
$('#dd-active').css({
    display: 'block'
})

$('.title').on('click', function () {
    $('.title').removeClass("active");
    $(this).addClass('active');
    $('#dd-title').text($(this).text())

})

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}