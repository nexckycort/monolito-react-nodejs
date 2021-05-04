(()=>{"use strict";var e={498:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationSource=void 0;const o=r(386);var n;!function(e){e.BODY="body",e.HEADER="headers",e.QUERY="query",e.PARAM="params"}(n=t.ValidationSource||(t.ValidationSource={})),t.default=(e,t=n.BODY)=>(r,n,s)=>{const{error:u}=e.validate(r[t]);if(void 0===u)return s();const{details:a}=u,i=a.map((e=>e.message.replace(/['"]+/g,""))).join(",");return o.BadRequestError(n,i)}},902:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(127),s=o(r(151)),u=n.Router({caseSensitive:!0});u.use("/test",s.default),t.default=u},151:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(127),s=r(386),u=o(r(498)),a=r(999),i=o(r(514)),l=n.Router();l.post("/",u.default(i.default.test),(async(e,t)=>{try{const{test:r}=e.body,o=a.TestService.test(r);s.SuccessOkResponse(t,"Test successfully",o)}catch{s.InternalError(t)}})),t.default=l},514:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(320));t.default={test:n.default.object().keys({test:n.default.string().equal("ok").required()})}},752:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),process.stdout.write("c");const n=o(r(563)),s=o(r(605)),u=r(275),a=o(r(871)),{server:i}=a.default();i.set("port",u.port),s.default.createServer(i).listen(u.port,(()=>{console.info(`${n.default.yellow("########################################################")}\n🛡️  ${n.default.bold.green(`Server ${n.default.blue(u.name)} listening on port:`)} ${n.default.bold.blue(u.port)} 🛡️\n${n.default.yellow("########################################################")}`)})).on("error",(e=>console.error("error in server.listen ",e)))},275:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.api=t.pathPublic=t.debug=t.corsUrl=t.name=t.port=t.environment=void 0;const n=o(r(622)),s=r(701);t.environment="production",t.port=process.env.PORT??"9000",t.name=process.env.NAME_API??"API",t.corsUrl=process.env.CORS_URL??"*",t.debug=Boolean(process.env.DEBUG??"0"),t.environment===s.ENVIRONMENT.PRODUCTION||void 0===t.environment?t.pathPublic=__dirname:t.pathPublic=n.default.join(__dirname,".."),t.api={prefix:process.env.PREFIX_API??"/api/v1.0"}},386:(e,t)=>{var r,o,n;Object.defineProperty(t,"__esModule",{value:!0}),t.responseError=t.InternalError=t.PayloadTooLargeError=t.BadRequestError=t.NotFoundError=t.SuccessCreatedResponse=t.SuccessOkResponse=void 0,function(e){e.SUCCESS="20000",e.FAILURE="40001"}(r||(r={})),function(e){e.TECNICO="Tecnico",e.BUSINESS="Negocio",e.NOTFOUND="Not Found",e.INTERNAL_ERROR="Internal error",e.BAD_REQUEST="Bad request",e.PAYLOAD_TOO_LARGE="Payload Too Large",e.UNAUTHORIZED="Authentication error",e.ECONNREFUSED="ECONNREFUSED",e.ECONNABORTED="ECONNABORTED",e.ECONNRESET="ECONNRESET"}(o||(o={})),function(e){e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.PAYLOAD_TOO_LARGE=413]="PAYLOAD_TOO_LARGE",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR"}(n||(n={})),t.SuccessOkResponse=(e,t="OK",o)=>{const s={message:t,statusCode:r.SUCCESS};return void 0!==o&&Object.assign(s,{data:o}),e.status(n.OK).json(s)},t.SuccessCreatedResponse=(e,t="OK",o)=>{const s={message:t,statusCode:r.SUCCESS};return void 0!==o&&Object.assign(s,{data:o}),e.status(n.CREATED).json(s)},t.NotFoundError=e=>t.responseError(r.FAILURE,o.NOTFOUND,n.NOT_FOUND,e),t.BadRequestError=(e,s=o.BAD_REQUEST)=>t.responseError(r.FAILURE,s,n.BAD_REQUEST,e),t.PayloadTooLargeError=(e,s=o.PAYLOAD_TOO_LARGE)=>t.responseError(r.FAILURE,s,n.PAYLOAD_TOO_LARGE,e),t.InternalError=e=>t.responseError(r.FAILURE,o.INTERNAL_ERROR,500,e),t.responseError=(e,t,r,o)=>o.status(r).json({statusCode:e,message:t})},816:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(87)),s=o(r(563)),u=r(275);t.default=()=>{let e="not available\n";const t=n.default.networkInterfaces();for(const r in t){const o=t[r];for(const t in o){const r=o[t];if("IPv4"===r.family&&!r.internal){e=`http://${r.address}:${s.default.bold.white(u.port)}\n`;break}}}return e}},976:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(275),n={info:(...e)=>{e.forEach((e=>{console.log(e)}))},debug:(...e)=>{o.debug&&e.forEach((e=>{console.log(e)}))},error:(e,t="")=>{console.log(`⚠️  ${e} ⚠️ `,t)}};t.default=n},701:(e,t)=>{var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR_HANDLERS=t.ENVIRONMENT=void 0,(o=t.ENVIRONMENT||(t.ENVIRONMENT={})).PRODUCTION="production",o.DEVELOPMENT="development",o.TEST="test",(r=t.ERROR_HANDLERS||(t.ERROR_HANDLERS={})).SYNTAX_ERROR="entity.parse.failed",r.PAYLOAD_TOO_LARGE="entity.too.large"},871:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(563)),s=r(701),u=o(r(246)),a=r(275),i=o(r(976)),l=o(r(816));t.default=()=>{i.default.info(n.default.bold.italic.blue("Loading configuration... 💻"));const e=`${n.default.bold.magenta("Environment:")} ${n.default.italic.bold.yellow(a.environment)}`;i.default.info(e);const t={server:void 0};try{if(t.server=u.default(),i.default.info(n.default.bold.green("Server loaded ✌️")),a.environment===s.ENVIRONMENT.DEVELOPMENT){const e=l.default();i.default.info(`You can now consume the ${n.default.bold.white("api.")}\n\n   ${n.default.bold.white("Local:")}           http://localhost:${n.default.bold.white(a.port)}\n   ${n.default.bold.white("On Your Network:")} ${e}`)}}catch(e){throw i.default.error(n.default.red("error loading Server"),e),e}return t}},246:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(127)),s=o(r(995)),u=o(r(150)),a=o(r(725)),i=o(r(563)),l=o(r(479)),d=o(r(622)),c=r(386),f=r(701),_=r(275),E=o(r(902)),p=o(r(976));t.default=()=>{const e=n.default();return e.use(a.default()),e.use(s.default()),e.use(l.default({origin:_.corsUrl,optionsSuccessStatus:200})),e.enable("trust proxy"),e.get("/status",((e,t)=>{t.status(200).end()})),e.use(n.default.static(d.default.join(_.pathPublic,"public"))),e.use(((e,t,r)=>{e.path.includes(_.api.prefix)?r():t.sendFile(d.default.join(_.pathPublic,"pages","index.html"))})),e.use(u.default("dev")),e.use(n.default.json({limit:"10mb"})),e.use(n.default.urlencoded({limit:"10mb",extended:!0,parameterLimit:5e4})),_.debug&&e.use(((e,t,r)=>{const o={headers:e.headers,params:e.params,query:e.query,body:e.body};p.default.debug(o),r()})),e.use(_.api.prefix,E.default),e.use(((e,t)=>c.NotFoundError(t))),e.use(((e,t,r,o)=>{if(void 0===e)o();else switch(e.type){case f.ERROR_HANDLERS.SYNTAX_ERROR:c.BadRequestError(r,"SyntaxError");break;case f.ERROR_HANDLERS.PAYLOAD_TOO_LARGE:c.PayloadTooLargeError(r);break;default:c.BadRequestError(r),p.default.error(i.default.red("error handlers"),e)}})),e}},554:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TestModel=void 0;var n=r(208);Object.defineProperty(t,"TestModel",{enumerable:!0,get:function(){return o(n).default}})},881:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(){this.test=e=>`test ${e}`}static get instance(){return void 0===r._instance&&(r._instance=new r),r._instance}}t.default=r.instance},208:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(881);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},999:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TestService=void 0;var n=r(621);Object.defineProperty(t,"TestService",{enumerable:!0,get:function(){return o(n).default}})},296:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(563)),s=r(554),u=o(r(976));class a{constructor(){this.test=e=>{try{return this.testModel.test(e).toUpperCase()}catch(e){throw u.default.error(n.default.red("Error TestService test "),e),new Error("TECHNICAL ERROR")}},this.testModel=s.TestModel}static get instance(){return void 0===a._instance&&(a._instance=new a),a._instance}}t.default=a.instance},621:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(296);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},563:e=>{e.exports=require("colors")},995:e=>{e.exports=require("compression")},479:e=>{e.exports=require("cors")},127:e=>{e.exports=require("express")},725:e=>{e.exports=require("helmet")},605:e=>{e.exports=require("http")},320:e=>{e.exports=require("joi")},150:e=>{e.exports=require("morgan")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}(752)})();