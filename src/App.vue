<template>
	<div id="app" :style="{ height: '100%' }">
		<transition name="fade">
			<div
				class="firstPage"
				v-show="scrollnotStartYet"
				@click="scrollnotStartYet = false"
			>
				<About :activate="scrollnotStartYet"></About>
			</div>
		</transition>

		<transition name="fade">
			<div v-show="!scrollnotStartYet" class="home_page">
				<WorkProject />
				<Navbar />
			</div>
		</transition>
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue';
	import WorkProject from './components/project/Project.vue';
	import About from './components/About.vue';

	export default {
		name: 'App',
		components: {
			Navbar,
			WorkProject,
			About,
		},
		data() {
			return {
				scrollnotStartYet: true,
			};
		},
		methods: {
			hideHomePage: function() {
				let isScrolled = window.pageYOffset;

				if (Math.floor(isScrolled > 5)) {
					this.scrollnotStartYet = false;
				} else if (Math.floor(isScrolled === 0)) {
					this.scrollnotStartYet = true;
				}
			},
		},
		created: function() {
			window.addEventListener('scroll', this.hideHomePage);
		},
		destroyed: function() {
			window.removeEventListener('scroll', this.hideHomePage);
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		line-height: 1.4;
		background-color: #19323c;
		overflow: hidden;
		color: #eff6e0;
	}

	body,
	html {
		height: 170%;
		overflow-y: scroll;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
	}
	@media only screen and (min-width: 768px) {
		body,
		html {
			height: 230%;
			overflow-y: scroll;
			overflow-x: hidden;
			-webkit-font-smoothing: antialiased;
		}
		/* For desktop: */
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
