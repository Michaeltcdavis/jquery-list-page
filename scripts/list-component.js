$(document).ready(function() {

  //Add an empty text input on render
  const $endItem = $('<input class="list-item" type="text">');
  $(".article-list").append($endItem);

  //On input, add an empty text input below
  $(".article-list").on("input", ".list-item", function(event) {
    event.preventDefault()
    const $target = $(event.target)
    const $newItem = $('<input class="list-item" type="text">');
    const $nextListItem = $target.next()
    if ($nextListItem.val() !== "") {

      $newItem.insertAfter($target);

    }
    //if the current list item is emptied remove the empty item below
    if ($target.val() === "" && $nextListItem.val() === "") {

      $nextListItem.remove();

    }
  })

  //on unfocus, if next item is blank remove unless its the last item
  $(".article-list").on("focusout", ".list-item", function(event) {
    event.preventDefault()
    const $target = $(event.target)
    const $nextListItem = $target.next()
    if (!$target.is(':last-child') && $target.val() === "") {

      $target.remove();

    }
    //remove the next list item on unfocus unless the user is clicking on the blank item
    if ($nextListItem.val() === "" &&
        !$nextListItem.is(':last-child') &&
        !$nextListItem.is(':hover')) {
      
      $nextListItem.remove();

    }
  })



});