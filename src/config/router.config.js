export default ($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('init', {
			url: '/',
			template: '<init></init>'
		})
}
