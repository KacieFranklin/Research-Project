const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Research-Project/_app",
	assets: new Set([".nojekyll","Background.png","brush.png","Cialan.png","cut.png","drag.png","drawView.png","eraser.png","favicon.png","Kacie.png","lasso.png","legal-info.txt","Logo.png","Paint.png","Rectangle-2.png","Rectangle-3.png","Rectangle.png","Robert.png","styles/global.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.sO10VrRV.js",app:"_app/immutable/entry/app.BuX68ika.js",imports:["_app/immutable/entry/start.sO10VrRV.js","_app/immutable/chunks/BhdH24hT.js","_app/immutable/chunks/CQYI_NzY.js","_app/immutable/chunks/D2DnMd7D.js","_app/immutable/chunks/COgNwSf4.js","_app/immutable/entry/app.BuX68ika.js","_app/immutable/chunks/CQYI_NzY.js","_app/immutable/chunks/DYecH8SR.js","_app/immutable/chunks/CdXOs1CV.js","_app/immutable/chunks/Ddo0dR0c.js","_app/immutable/chunks/-P2WpN9A.js","_app/immutable/chunks/B6EblSxu.js","_app/immutable/chunks/CoJ3ZqS1.js","_app/immutable/chunks/BNffUbiG.js","_app/immutable/chunks/COgNwSf4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BqR9HhQd.js')),
			__memo(() => import('./chunks/1-CfgR5A-W.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/Research-Project/","/Research-Project/about","/Research-Project/contact","/Research-Project/dynamic","/Research-Project/home","/Research-Project/legal-info","/Research-Project/news","/Research-Project/products","/Research-Project/questions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/Research-Project/","/Research-Project/about","/Research-Project/contact","/Research-Project/dynamic","/Research-Project/home","/Research-Project/legal-info","/Research-Project/news","/Research-Project/products","/Research-Project/questions"]);

const base = "/Research-Project";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
