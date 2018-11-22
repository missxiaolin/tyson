// begin
$(function () {
    // news
  var str = window.location.search
  var r = getQueryStringArgs(str)
  $('#nID').val(r.id)
})// .end

// .查询安心码信息
$('#queryFactoryBySecurityCode').click(function () {
  var _sercurityCode = $('#sercurityCode').val()
  var dataurl = 'http://39.105.203.57:9999/front/securityCode/queryFactoryBySecurityCode'

  if (_sercurityCode == '') {
    alert('请输入安心码！')
  } else {
    dataurl = dataurl + '?sercurityCode=' + _sercurityCode

        //  	alert(dataurl);
    $.ajax({
      url: dataurl,
      data: {
        securityCode: _sercurityCode
      },
      type: 'post',
      cache: false,
      dataType: 'json',
      beforeSend: function () { },
      success: function (d) {
        console.log(d)
                // alert('1');
        if (d != NaN && d != null && d.code == '0000') {
          if (d.imageInspections == null) {
            alert('未找到对应的检测报告!')
          } else {
            alert('查询成功!')
            var html = ''
            for (var i = 0; i < d.imageInspections.length; i++) {
              html += '<img src="' + d.imageInspections[0] + '" alt="" id="report">'
            }
            $('#c4rpImgList').html(html)
                        // 更换图片，检测报告每日可能有0、1、2张，在有0张的时候不显示，1张显示1张，2两张显示两张。
                        // get attribute value
            // var picSrc = $('report').attr('src')
                        // set attribute value
            // $('#report').attr('src', 'http://30.105.203.57:8888' + d.imageInspection)
          }
        } else {
          alert('没有查到相关安心码!')
        }
      },
      complete: function () { },
      error: function () {
        alert('没有找到相关安心码!')
      }
    })
  }
})

// 查看地图位置信息
$('#checkMap').click(function () {
    // 跳转到工厂地址的图片页面
  location.href = 'location/location.html'
})

// .fn.show.hide
function showPop (e) {
  var n = $('.' + e)
  n.show()
  var t = n.height() / 2
  $('.mask').show(), n.css('margin-top', -t).css('opacity', '1')
}
function hidePop () {
  $('.mask').hide(), $('.modal').hide().css('opacity', '0')
}
// .fn.getNewsList
function getNewsList (gids, types, pages, sizes) {
  var dataurl = 'https://xycmsapi.xianyugame.com/getNewsList?gameid=' + gids + '&type=' + types + '&page=' + pages + '&size=' + sizes
  $.ajax({
    url: dataurl,
    data: {},
    type: 'get',
    cache: false,
    dataType: 'json',
    beforeSend: function () {
            // $(".faqLoad").removeClass("none");
    },
    success: function (d) {
            // alert('1');
      if (d != NaN && d != null && d.c == 1 && d.d != null) {
        var list = d.d
        $('#newsList').html('')
        $('#synews').html('')
        var a = ''
        var b = ''
        for (var i = 0; i < list.length; i++) {
          a += '<li>'
          a += '<a href="cont.html?id=' + list[i].id + '">'
          a += '<h3>' + list[i].title + '</h3>'
          a += '<p>' + list[i].description + '</p>'
          a += '<p class="times">' + new Date(list[i].date).format('yyyy-MM-dd') + '</p>'
          a += '</a>'
          a += '</li>'
          b += '<li><em>' + new Date(list[i].date).format('dd-MM') + '</em><a href="cont.html?id=' + list[i].id + '"><span>【' + list[i].show_type + '】</span>' + list[i].title + '<p class="ninfos">' + list[i].description + '</p></a></li>'
        }
        $('#newsList').append(a)
        $('#synews').append(b)
      } else {
                // alert("No data!");
      }
    },
    complete: function () {
            // $(".faqLoad").addClass("none");
    },
    error: function () {
    }
  })
}
// .fn.getNewsDetail
function getNewsDetail () {
  var dataurl = 'https://xycmsapi.xianyugame.com/getNewsDetailInfo'
  $.ajax({
    url: dataurl,
    data: {
      id: $('#nID').val()
    },
    type: 'get',
    cache: false,
    dataType: 'json',
    beforeSend: function () {
            // $(".faqLoad").removeClass("none");
    },
    success: function (d) {
            // alert('1');
      if (d != NaN && d != null && d.c == 1 && d.d != null) {
        var list = d.d
        $('#contDetails').html('')
        var a = ''
        $('#curtype').html(list[0].show_type)
        a += '<h3>' + list[0].title + '</h3>'
        a += '<p class="ncTime">' + new Date(list[0].date).format('yyyy-MM-dd') + '</p>'
        a += '<div class="ncInner">'
        a += '<p>' + list[0].content + '</p>'
        a += '</div>'
        $('#contDetails').append(a)
      } else {
                // alert("No data!");
      }
    },
    complete: function () {
            // $(".faqLoad").addClass("none");
    },
    error: function () {
    }
  })
}
// .fn
function getQueryStringArgs (q) {
  var qs = q.split('?')[1] || (location.search.length > 0 ? location.search.substring(1) : ''),
    args = {},
    items = qs.length ? qs.split('&') : [],
    item = null,
    name = null,
    value = null,
    i = 0,
    len = items.length
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}
// .fn.getDownLoad
function getDownLoad () {
  var dataurl = 'https://xycmsapi.xianyugame.com/getDownloadInfo'
  $.ajax({
    url: dataurl,
    data: {
      gameid: $('.gid').val()
    },
    type: 'get',
    cache: false,
    dataType: 'json',
    beforeSend: function () { },
    success: function (d) {
            // alert('1');
      if (d != NaN && d != null && d.c == 1 && d.d != null) {
        var list = d.d
        $('.dl').attr('href', list.android_url)
      } else {
                // alert("No data!");
      }
    },
    complete: function () { },
    error: function () {
    }
  })
}
// .fn.getPic
function getPic () {
  var dataurl = 'https://xycmsapi.xianyugame.com/getPicList'
  $.ajax({
    url: dataurl,
    data: {
      gameid: $('.gid').val(),
      type: 2
    },
    type: 'get',
    cache: false,
    dataType: 'json',
    beforeSend: function () { },
    success: function (d) {
            // alert('1');
      if (d != NaN && d != null && d.c == 1 && d.d != null) {
        var list = d.d
        $('#lunbo').html('')
        var a = ''
        for (var i = 0; i < list.length; i++) {
          a += '<div class="swiper-slide"><img src=' + list[i].pic_url + '><p class="slide-title abs"></p></div>'
        }
        $('#lunbo').append(a)
      } else {
        $('#lunbo').html('No data!')
                // alert("No data!");
      }
    },
    complete: function () { },
    error: function () {
    }
  })
}
