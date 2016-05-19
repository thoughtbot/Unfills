!(function () {

	function VerticalTabs (context) {
		this.$context = $(context);
		this.$tabpanels = this.$context.find(".js-vertical-tab-content");

		this.$context
			.on('click.empties.verticaltabs', '.js-vertical-tab', this.onTabClick.bind(this))
			.on('click.empties.verticaltabs', ".js-vertical-tab-accordion-heading", this.onHeadingClick.bind(this));
	}

	VerticalTabs.prototype = {
		
		init: function () {
			this.$tabpanels.hide();
			this.$tabpanels.first().show();
		},


		onTabClick: function (event) {
			event.preventDefault();

			var $tab = $(event.currentTarget);
			this.$tabpanels.hide();

			var activeTab = $tab.attr("rel");
			this.$context.find("#"+activeTab).show();

			this.$context.find(".js-vertical-tab").removeClass("is-active");
			$tab.addClass("is-active");

			this.$context.find(".js-vertical-tab-accordion-heading").removeClass("is-active");
			this.$context.find(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
		},

		onHeadingClick: function (event) {
			event.preventDefault();
			var $heading = $(event.currentTarget);
			this.$tabpanels.hide();

			var accordion_activeTab = $heading.attr("rel");
			this.$context.find("#"+accordion_activeTab).show();
			
			this.$context.find(".js-vertical-tab-accordion-heading").removeClass("is-active");
			$heading.addClass("is-active");
			
			this.$context.find(".js-vertical-tab").removeClass("is-active");
			this.$context.find(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
		}
	}

	// self initialize
	$(".vertical-tabs-container").each( function (index, element) {
		var verticalTabs = new VerticalTabs(element);
		verticalTabs.init();
	});

})();

