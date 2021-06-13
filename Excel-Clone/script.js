let columnHeader = $('.column-names');
let rowHeader = $('.row-names');
let dataContainer = $('.actual-data');
for (let i = 1; i <= 100; i++) {
    columnHeader.append(`<div class="column">A</div>`);
    rowHeader.append(`<div class="row">${i}</div>`);
}

for (let i = 1; i <= 100; i++) {
    let row = $(`<div class="cell-row" id="row-${i}"><div>`);
    for (let j = 1; j <= 100; j++) {
        row.append(`<div class="input-cell" id="row-${i}-col=${j}" row="${i}" col="${j}" contenteditable="false"></div>`);
    }
    dataContainer.append(row);
}
let lastRowId = 100, lastColId = 100;


//* -> For making col-header and row-header scroll according to data-container
//* -> To add more rows and columns as we reach extreme bottom or extreme right
dataContainer.scroll(function (e) {
    //* Adding extra rows as we reach near-to-bottom
    let verticalDiff = this.scrollHeight - this.scrollTop;
    if (verticalDiff - 100 <= this.clientHeight) {
        for (let i = lastRowId + 1; i <= lastRowId + 20; i++) {
            rowHeader.append(`<div class="row">${i}</div>`);
        }

        for (let i = lastRowId + 1; i <= lastRowId + 20; i++) {
            let row = $(`<div class="cell-row" id="row-${i}"><div>`);
            for (let j = 1; j <= lastColId; j++) {
                row.append(`<div class="input-cell" id="row-${i}-col=${j}" row="${i}" col="${j}" contenteditable="false"></div>`);
            }
            dataContainer.append(row);
        }
        lastRowId += 20;
    }

    //* Adding extra columns as we reach near-to right
    let horizontalDiff = this.scrollWidth - this.scrollLeft;
    if (horizontalDiff - 100 <= this.clientWidth) {
        for (let i = lastColId + 1; i <= lastColId + 20; i++) {
            columnHeader.append(`<div class="column">A</div>`);
        }

        for (let i = 1; i <= lastRowId; i++) {
            let row = $(`#row-${i}`);
            for (let j = lastColId + 1; j <= lastColId + 20; j++) {
                row.append(`<div class="input-cell" id="row-${i}-col=${j}" row="${i}" col="${j}" contenteditable="false"></div>`);
            }
            dataContainer.append(row);
        }
    }


    //* Scrolling row-header and col-header with same amount as the data amount is scrolling.
    rowHeader.scrollTop(this.scrollTop);
    columnHeader.scrollLeft(this.scrollLeft);
});

//* Make cell editable on dblclick
$('.input-cell').dblclick(function (e) {
    $('.input-cell.selected').removeClass("selected");
    $(this).addClass("selected");
    $(this).attr("contenteditable", "true");
    $(this).focus();
});

//* Make editable property to false on blurring from the cell
$('.input-cell').blur(function (e) {
    $(this).attr("contenteditable", "false");
});

//* Select any cell on it's click
//* Select Multiple cells on pressing ctrl key
$('.input-cell').click(function (e) {
    let row = parseInt($(this).attr('row'));
    let col = parseInt($(this).attr('col'));
    let topCell = $(`.input-cell[row=${row - 1}][col=${col}]`);
    let bottomCell = $(`.input-cell[row=${row + 1}][col=${col}]`);
    let leftCell = $(`.input-cell[row=${row}][col=${col - 1}]`);
    let rightCell = $(`.input-cell[row=${row}][col=${col + 1}]`);

    if ($(this).hasClass('selected') && e.ctrlKey) {
        console.log("unselect");
        unselectCell(this, topCell, bottomCell, leftCell, rightCell, e);
    }
    else {
        selectCell(this, topCell, bottomCell, leftCell, rightCell, e);
    }
});

//* Unselecting a cell by pressing ctrl key
function unselectCell(ele, topCell, bottomCell, leftCell, rightCell, e) {
    if ($(ele).attr("contenteditable") == "false") {
        if ($(ele).hasClass('top-selected')) {
            topCell.removeClass('bottom-selected');
        }
        if ($(ele).hasClass('bottom-selected')) {
            bottomCell.removeClass('top-selected');
        }
        if ($(ele).hasClass('left-selected')) {
            leftCell.removeClass('right-selected');
        }
        if ($(ele).hasClass('right-selected')) {
            rightCell.removeClass('left-selected');
        }

        $(ele).removeClass('selected top-selected bottom-selected left-selected right-selected');
    }
}

//* Selecting a single/multiple cell
function selectCell(ele, topCell, bottomCell, leftCell, rightCell, e) {
    if (e.ctrlKey) {
        if (topCell != null && topCell.hasClass('selected')) {
            topCell.addClass('bottom-selected');
            $(ele).addClass('top-selected');
        }
        if (bottomCell != null && bottomCell.hasClass('selected')) {
            bottomCell.addClass('top-selected');
            $(ele).addClass('bottom-selected');
        }
        if (leftCell != null && leftCell.hasClass('selected')) {
            leftCell.addClass('right-selected');
            $(ele).addClass('left-selected');
        }
        if (rightCell != null && rightCell.hasClass('selected')) {
            rightCell.addClass('left-selected');
            $(ele).addClass('right-selected');
        }
        $(ele).addClass('selected');
    }
    else {
        $('.input-cell.selected').removeClass('selected top-selected bottom-selected left-selected right-selected');
        $(ele).addClass('selected');
    }
}

//* Start cell for selecting multiple cells
let startCell = [];
let endCell = [];
let selectionStarted = false;

//* We are calculating startCell using mousemove() function because mousemove() triggers whenever we move inside a element.
$('.input-cell').mousemove(function (e) {
    if (e.buttons == 1) {
        if (!selectionStarted) {
            let row = parseInt($(this).attr('row'));
            let col = parseInt($(this).attr('col'));
            startCell = [row, col];
            // For selecting the startCell and after that all other cells will be selected using mouseenter()
            selectAllBetweenCells(startCell, startCell);
            selectionStarted = true;
            $(".input-cell.selected").attr("contenteditable", "false");
        }
    } else {
        selectionStarted = false;
    }
})

//* We are calculating endCell using mouseenter() function because mouseenter() triggers whenever we move from one element to another.
//* We are not caluculatig startCell with mouseenter() because this will not select the startCell beacuse it will not trigger when we move inside a element.
$('.input-cell').mouseenter(function (e) {
    if (e.buttons == 1) {
        let row = parseInt($(this).attr('row'));
        let col = parseInt($(this).attr('col'));
        endCell = [row, col];
        selectAllBetweenCells(startCell, endCell);
    }
});

//* Function for selecting all cells between startCell and endCell
function selectAllBetweenCells(startCell, endCell) {
    let startRow = Math.min(startCell[0], endCell[0]), startCol = Math.min(startCell[1], endCell[1]);
    let endRow = Math.max(startCell[0], endCell[0]), endCol = Math.max(startCell[1], endCell[1]);
    $('.input-cell.selected').removeClass('selected top-selected bottom-selected left-selected right-selected');
    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            let topCell = $(`.input-cell[row=${i - 1}][col=${j}]`);
            let bottomCell = $(`.input-cell[row=${i + 1}][col=${j}]`);
            let leftCell = $(`.input-cell[row=${i}][col=${j - 1}]`);
            let rightCell = $(`.input-cell[row=${i}][col=${j + 1}]`);
            let currCell = $(`.input-cell[row=${i}][col=${j}]`);

            // Passed e has {ctrlKey: true} because that was what needed to select cells in selectCell function
            selectCell(currCell[0], topCell, bottomCell, leftCell, rightCell, { ctrlKey: true });
        }
    }
}