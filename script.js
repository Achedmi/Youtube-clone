let open = false;
$(document).ready(function () {
  for (let index = 0; index < 50; index++) {
    $(".categories").append(
      `<div><p >lorem ${index}</p></div>`
    );
  }
  for (let index = 0; index < 7; index++) {
  $(".main").append(`
  <div class="card">
  <div class="card-content">
    <div class="tupmnail"></div>
    <div class="title-photo">
      <div class="photo">
        <div class="profile-pic"></div>
      </div>
      <div class="title">
        <h3>JE REGARDE UN EPISODE DE NEXT (10 ans après) #8</h3>
        <p>Moussa vlogs</p>
        <p>1.5M views</p>
      </div>
      <div class="about">
        <img
          src="./assets/1x/outline_more_vert_white_24dp.png"
          alt=""
        />
      </div>
    </div>
  </div>
</div>`);
  }

  $(".big-lef-nav").hide();
});
function show_hide_menu(params) {
  if (!open) {
    $(".body").css({ "grid-template-columns": "300px auto" });
    $(".card").css({ width: "25%" });
    $(".main").css({ "padding-left": "6%", "padding-right": "6%" });
    $(".lef-nav").hide();
    $(".big-lef-nav").show();
  } else {
    $(".body").css({ "grid-template-columns": "80px auto" });
    $(".card").css({ width: "20%" });
    $(".lef-nav").show();
    $(".big-lef-nav").hide();
    $(".main").css({ "padding-left": "15px", "padding-right": "15px" });
  }

  open = !open;
}
