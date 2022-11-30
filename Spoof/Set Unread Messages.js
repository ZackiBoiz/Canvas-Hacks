var msgs = parseInt(prompt("Enter unread count:", "69"));
document.getElementsByClassName('menu-item__badge')[2].innerHTML = '<span class="ergWt_bGBk">"One unread message."</span><span aria-hidden="true">' + msgs + '</span>';
