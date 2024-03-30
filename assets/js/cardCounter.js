var engDefaults = {
    "SR": 36,
    "AA": 16,
    "SEC": 8,
    "L": 4,
    "M": 1,
    "SP": 2
};

var jpnDefaults = {
    "SR": 18,
    "AA": 8,
    "SEC": 4,
    "L": 2,
    "M": 1,
    "SP": 1
};

var clear = {
    "SR": 0,
    "AA": 0,
    "SEC": 0,
    "L": 0,
    "M": 0,
    "SP": 0
};

function setDefaults(defaultsDict) {
    $('#sr .cardValueText').text(defaultsDict["SR"]);
    $('#aa .cardValueText').text(defaultsDict["AA"]);
    $('#sec .cardValueText').text(defaultsDict["SEC"]);
    $('#lead .cardValueText').text(defaultsDict["L"]);
    $('#manga .cardValueText').text(defaultsDict["M"]);
    $('#sp .cardValueText').text(defaultsDict["SP"]);
}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var action = this.getAttribute('data-action');

            switch(action) {
                case 'sr-dec':
                    var srText = $('#sr .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#sr .cardValueText').text(numericValue);
                    break;
                case 'sr-inc':
                    var srText = $('#sr .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#sr .cardValueText').text(numericValue);
                    break;
                case 'sec-dec':
                    var srText = $('#sec .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#sec .cardValueText').text(numericValue);
                    break;
                case 'sec-inc':
                    var srText = $('#sec .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#sec .cardValueText').text(numericValue);
                    break;
                case 'aa-dec':
                    var srText = $('#aa .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#aa .cardValueText').text(numericValue);
                    break;
                case 'aa-inc':
                    var srText = $('#aa .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#aa .cardValueText').text(numericValue);
                    break;
                case 'lead-dec':
                    var srText = $('#lead .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#lead .cardValueText').text(numericValue);
                    break;
                case 'lead-inc':
                    var srText = $('#lead .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#lead .cardValueText').text(numericValue);
                    break;
                case 'sp-dec':
                    var srText = $('#sp .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#sp .cardValueText').text(numericValue);
                    break;
                case 'sp-inc':
                    var srText = $('#sp .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#sp .cardValueText').text(numericValue);
                    break;
                case 'manga-dec':
                    var srText = $('#manga .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue -= 1;
                    $('#manga .cardValueText').text(numericValue);
                    break;
                case 'manga-inc':
                    var srText = $('#manga .cardValueText').text();
                    var numericValue = parseFloat(srText);
                    numericValue += 1;
                    $('#manga .cardValueText').text(numericValue);
                    break;
                case 'eng-defaults':
                    setDefaults(engDefaults);
                    break;
                case 'jpn-defaults':
                    setDefaults(jpnDefaults);
                    break;
                case 'clear':
                    setDefaults(clear);
                    break;
                case 'updateSR':
                    var countValue = $("#srCount").val();
                    $('#sr .cardValueText').text(countValue);
                    $("#srCount").val("");
                    break;
                case 'updateSEC':
                    var countValue = $("#secCount").val();
                    $('#sec .cardValueText').text(countValue);
                    $("#secCount").val("");
                    break;
                case 'updateAA':
                    var countValue = $("#aaCount").val();
                    $('#aa .cardValueText').text(countValue);
                    $("#aaCount").val("");
                    break;
                case 'updateL':
                    var countValue = $("#leadCount").val();
                    $('#lead .cardValueText').text(countValue);
                    $("#leadCount").val("");
                    break;
                case 'updateSP':
                    var countValue = $("#spCount").val();
                    $('#sp .cardValueText').text(countValue);
                    $("#spCount").val("");
                    break;
                case 'updateM':
                    var countValue = $("#mangaCount").val();
                    $('#manga .cardValueText').text(countValue);
                    $("#mangaCount").val("");
                    break;
                default:
                    break;
            }
        })
    })
});

$(document).ready(function() {
    setDefaults(engDefaults);
});