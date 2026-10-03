$(function() {
    // General
    $("#header").load("/assets/templates/header.html");
    $("#footer").load("/assets/templates/footer.html");

    // Artworks
    $("#gallery-codename-alyx").load("/assets/templates/galleries/codename-alyx.html");
    $("#gallery-twilight-c17").load("/assets/templates/galleries/twilight-c17.html");
    $("#gallery-strange-movement").load("/assets/templates/galleries/strange-movement.html");
    $("#gallery-horizon-calm-dawn").load("/assets/templates/galleries/horizon-calm-dawn.html");

    // Screenshots
    $("#gallery-dust").load("/assets/templates/galleries/dust.html");
    $("#gallery-minecraft-india").load("/assets/templates/galleries/minecraft-india.html");
    $("#gallery-minecraft-dungeon").load("/assets/templates/galleries/minecraft-dungeon.html");
    $("#gallery-minecraft-castle").load("/assets/templates/galleries/minecraft-castle.html");
    $("#gallery-minecraft-office").load("/assets/templates/galleries/minecraft-office.html");
    $("#gallery-minecraft-assets").load("/assets/templates/galleries/minecraft-assets.html");
    $("#gallery-cottage").load("/assets/templates/galleries/cottage.html");

    // All projects in one gallery
    $.get("/assets/templates/galleries/all-artworks.html")
    .then(function(data) {
        $("#gallery-all").append(data);
        return $.get("/assets/templates/galleries/all-leveldev.html");
    })
    .then(function(data) {
        $("#gallery-all").append(data);
        return $.get("/assets/templates/galleries/all-assets.html");
    })
    .then(function(data) {
        $("#gallery-all").append(data);
    });
});