export class Accordion {
  init() {
    this.Accordion();
  }
  Accordion() {
   $(document).ready(function () {
  // 🔹 Step 1: Hide all contents
  $(".closet-content").hide();

  // 🔹 Step 2: First accordion open by default
  $(".closet-header")
    .first()
    .addClass("active")
    .next(".closet-content")
    .show();

  // 🔹 Step 3: Click handler
  $(".closet-header").on("click", function () {
    const $this = $(this);
    const $content = $this.next(".closet-content");

    // Agar already active hai → kuch mat karo
    if ($this.hasClass("active")) return;

    // 🔹 Close all
    $(".closet-header").removeClass("active");
    $(".closet-content").slideUp();

    // 🔹 Open clicked one
    $this.addClass("active");
    $content.slideDown();
  });
});

  }
}
