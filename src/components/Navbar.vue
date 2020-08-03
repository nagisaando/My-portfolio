<template>
	<div>
		<div class="sticky">
			<div class="name">
				NAGISA
				<br />
				ANDO
			</div>

			<ul class="mainnav">
				<li class="contact">
					<a href="mailto:nagisa.ando0720@gmail.com">CONTACT</a>
				</li>
			</ul>

			<ul class="socialmedia-md socialmedia">
				<li class="follow">Follow</li>
				<li class="linked-in">
					<a
						href="https://www.linkedin.com/in/nagisa-ando-42ab361aa/"
						target="_blank"
						>LinkedIn</a
					>
				</li>
				<li class="github">
					<a href="https://github.com/nagisaando/" target="_blank"
						>Github</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
	};
</script>

<style scoped>
	@media only screen and (max-width: 600px) {
		.socialmedia {
		display: flex;
		justify-content: flex-end;
		top: 70px;
		position: absolute;
		right: 0;
		margin-right: 20px
	}
	} 
	@media only screen and (min-width: 600px) {
		.socialmedia-md {
			font-size: 0.8rem;
			position: absolute;

			transform: translateX(3rem) translateY(25rem) rotate(90deg);
			transform-origin: left top;

			-webkit-transform: translateX(3rem) translateY(25rem) rotate(90deg);
			-webkit-transform-origin: left top;
		}
		.socialmedia-md li {
			margin-left: 0.5rem;
		}
	}
	.sticky {
		top: 0;
		position: fixed;
		width: 100%;
		pointer-events: none;
		height: 100%;
	}

	ul {
		list-style-type: none;
		display: flex;
		pointer-events: auto;
		z-index: 100;
	}

	li {
		margin-left: 1rem;
	}
	a {
		text-decoration: none;
		transition: 0.3s;
		color: #eff6e0;
	}

	a:hover {
		color: #f03a47;
	}

	.name {
		position: absolute;
		margin-left: 2rem;
		margin-top: 2rem;
		font-size: 1.5rem;
	}

	.mainnav {
		float: right;
		margin-right: 20px;
		margin-top: 3rem;
		margin-bottom: 2rem;
	}

	
	.follow {
		background-color: #f03a47;
		text-align: center;
		width: 4rem;
		height: 15%;
	}
</style>
