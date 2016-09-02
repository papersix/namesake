$(document).ready(function() {

  let $searchers = $('#searchers');

  $('#yearbtn').click(function () {
    $searchers.empty();
      const $brth_yr = $('#year').val();
      const $gndr = $('#gender').val();
      const $ethcty = $('#ethcty').val();
      console.log($brth_yr)

      $.ajax ({
        url: '/name/namesapi?'+ 'brth_yr=' + $brth_yr + '&ethcty=' + $ethcty + '&gndr=' + $gndr,
        method: 'GET',
        datatype: 'json',
        success:
        function (data) {
          data.forEach(function(data){
            console.log(data.nm, data.gndr);

            const $card = $('<div>').addClass('card')
            const $ul = $('<ul>').addClass('blocker')
            const $name = $('<li>').html(data.nm).addClass('name')
            const $rank = $('<li>').html(data.rnk).addClass('rank')
            const $count = $('<li>').html(data.cnt).addClass('count')
            const $saveme = $('<button>').html('saveme').addClass('saveme')
            $card.append($name, $rank, $count, $saveme)
            $ul.append($card);
            $searchers.append($ul)
          })
        }
      })
  })

})






