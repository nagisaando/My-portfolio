<template>
	<div class="list-wrap">
		<ul class="sm-outer-wrapper md-outer-wrapper">
			<li class="slide-sm one">
				<div class="portfolio-link">
					<a
						href="https://bug-tracker.nagisando.com/"
						target="_blank"
						class="link-section"
					>
						<img
							class="slider"
							:class="fadeControl[0]"
							src="../../assets/bugTracker.gif"
						/>
						<div
							class="description"
							:style="{ opacity: checkInfo[0] }"
						>
							<h2>Bug Tracker</h2>
							<p>VueJs/tailwind/HTML</p>
						</div>
					</a>
				</div>
			</li>

			<li class="slide-sm two">
				<div class="portfolio-link">
					<a
						href="https://pomodoro-timer.nagisando.com/"
						target="_blank"
						class="link-section"
					>
						<img
							class="slider"
							:class="fadeControl[1]"
							src="../../assets/pomodoroTimer.gif"
						/>
						<div
							class="description"
							:style="{ opacity: checkInfo[1] }"
						>
							<h2>Pomodoro Timer</h2>
							<p>Javascript/Bootstrap/HTML</p>
						</div>
					</a>
				</div>
			</li>

			<li class="slide-sm three">
				<div class="portfolio-link">
					<a
						href="https://sushi-restaurant.nagisando.com/"
						target="_blank"
						class="link-section"
					>
						<img
							class="slider"
							:class="fadeControl[2]"
							src="../../assets/restaurant.gif"
						/>
						<div
							class="description"
							:style="{ opacity: checkInfo[2] }"
						>
							<h2>Sushi Restaurant</h2>
							<p>Javascript/CSS/HTML</p>
						</div>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'WorkProject',
		data() {
			return {
				fadeControl: [
					{
						fadeinAnime: false,
						fadeoutAnime: false,
					},
					{
						fadeinAnime: false,
						fadeoutAnime: false,
					},
					{
						fadeinAnime: false,
						fadeoutAnime: false,
					},
				],
				checkInfo: [
					{ checkInfo: false },
					{ checkInfo: false },
					{ checkInfo: false },
				],
			};
		},
		methods: {
			startLocation: function() {
				if (window.innerWidth >= 768) {
					const width = window.innerWidth - window.innerWidth * 0.1;
					return { transform: `translate(${width}px)` };
				}
				return { top: '30%' };
			},

			handleScroll: function() {
				if (window.innerWidth >= 768) {
					this.notScrolledYet = false;
					let item = document.querySelector('.outer-wrapper');
					let value =
						window.innerWidth -
						window.innerWidth * 0.1 -
						window.scrollY;
					item.style.transform = `translate(${value}px)`;
				}
				return;
			},

			opacityChange: function() {
				let sliders = document.querySelectorAll('.slider');
				let vm = this;
				let i = 0;
				sliders.forEach((slide) => {
					let slider = slide.getBoundingClientRect();
					let sliderTop = Math.floor(slider.top);
					let sliderBottom = Math.floor(slider.bottom);
					let centerPoint = Math.floor(window.innerHeight / 2);
					let sliderHeight = slider.height;

					if (
						sliderTop >= centerPoint - sliderHeight &&
						sliderBottom <= centerPoint + sliderHeight
					) {
						vm.fadeControl[i].fadeinAnime = true;
						vm.fadeControl[i].fadeoutAnime = false;
						vm.checkInfo[i] = 1;
					} else {
						vm.fadeControl[i].fadeoutAnime = true;
						vm.fadeControl[i].fadeinAnime = false;
						vm.checkInfo[i] = 0;
					}
					i++;
				});
			},
		},

		created: function() {
			window.addEventListener('scroll', this.opacityChange);
		},
		destroyed: function() {
			window.removeEventListener('scroll', this.opacityChange);
		},
	};
</script>

<style scoped>
	/* For mobile phones: */
	.sm-outer-wrapper {
		transform: translateY(50vh);
		width: 100%;
	}
	.slide-sm {
		position: relative;
		width: 100%;
		height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (min-width: 600px) {
		.list-wrap {
			text-align: center;
			display: flex;
			justify-content: center;
		}
		.md-outer-wrapper {
			transform: translateY(50vh);
			width: 70%;
			margin: 0;
		}
	}

	.portfolio-link {
		position: relative;
		width: 90%;
		height: 100%;
	}

	.link-section {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slider {
		height: 100%;
		width: 100%;

		object-fit: contain;
		transform: scale(0.9);
		opacity: 0.2;
		transition: 200ms;
		opacity: 0.2;
	}

	.slider:hover {
		transform: scale(1);
		opacity: 1;
	}

	.description {
		padding-top: 1vw;
		padding-bottom: 1vw;
		padding-right: 2vw;
		box-sizing: border-box;
		position: absolute;

		color: #eff6e0;

		text-align: right;

		background: rgba(10, 20, 24, 0.9);
		width: 100%;
		height: 20%;
		bottom: 0;
		opacity: 0;
		pointer-events: none;
		transition-duration: 100ms;
	}

	.checkInfo {
		opacity: 1;
	}

	.fadeinAnime {
		animation-name: fadein;
		animation-duration: 300ms;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;

		-webkit-animation-name: fadein;
		-webkit-animation-duration: 300ms;
		-webkit-animation-fill-mode: forwards;
		-webkit-animation-timing-function: ease-in;
	}
	@keyframes fadein {
		0% {
			opacity: 0.2;
			transform: scale(0.9);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@-webkit-keyframes fadein {
		0% {
			opacity: 0.2;
			transform: scale(0.9);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.fadeoutAnime {
		animation-name: fadeout;
		animation-duration: 300ms;
		animation-timing-function: ease-in;

		-webkit-animation-name: fadeout;
		-webkit-animation-duration: 300ms;
		-webkit-animation-timing-function: ease-in;
	}
	@keyframes fadeout {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0.2;
			transform: scale(0.9);
		}
	}

	@-webkit-keyframes fadeout {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0.2;
			transform: scale(0.9);
		}
	}

	.fadeinGreeting {
		animation-name: scrollIconIn;
		animation-duration: 500ms;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;

		-webkit-animation-name: scrollIconIn;
		-webkit-animation-duration: 400ms;
		-webkit-animation-timing-function: ease-in;
		-webkit-animation-fill-mode: forwards;
	}
	@keyframes scrollIconIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes scrollIconIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.fadeoutGreeting {
		animation-name: scrollIconOut;
		animation-duration: 400ms;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;

		-webkit-animation-name: scrollIconOut;
		-webkit-animation-duration: 400ms;
		-webkit-animation-timing-function: ease-in;
		-webkit-animation-fill-mode: forwards;
	}
	@keyframes scrollIconOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@-webkit-keyframes scrollIconOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
