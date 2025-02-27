import{al as S}from"./frappe-ui-2-dobwEi.js";function F(y,w){for(var c=0;c<w.length;c++){const f=w[c];if(typeof f!="string"&&!Array.isArray(f)){for(const v in f)if(v!=="default"&&!(v in y)){const m=Object.getOwnPropertyDescriptor(f,v);m&&Object.defineProperty(y,v,m.get?m:{enumerable:!0,get:()=>f[v]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}};(function(y,w){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,f,v){var m=c("../lib/oop"),p=c("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.\-\'\" ]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},d.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};m.inherits(d,p),d.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(s){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:s}},d.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},f.JsDocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(c,f,v){var m=c("../lib/oop"),p=c("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,d=c("./text_highlight_rules").TextHighlightRules,s="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",g=function(i){var r={"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},n=this.createKeywordMapper(r,"identifier"),e="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)",a="(function)(\\s*)(\\*?)",u={token:["identifier","text","paren.lparen"],regex:"(\\b(?!"+Object.values(r).join("|")+"\\b)"+s+")(\\s*)(\\()"};this.$rules={no_regex:[p.getStartRule("doc-start"),o("no_regex"),u,{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(=)(\\s*)"+a+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))("+s+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(:)(\\s*)"+a+"(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)"+a+"(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+e+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:n,regex:s},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:/=/},{token:["storage.type","text","storage.type","text","paren.lparen"],regex:a+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:"prototype"},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:s},{regex:"",token:"empty",next:"no_regex"}],start:[p.getStartRule("doc-start"),o("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[o("function_arguments"),{token:"variable.parameter",regex:s},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!i||!i.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(x,b,h){if(this.next=x=="{"?this.nextState:"",x=="{"&&h.length)h.unshift("start",b);else if(x=="}"&&h.length&&(h.shift(),this.next=h.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return x=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+s+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=[^\\(]+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!i||i.jsx!=!1)&&l.call(this)),this.embedRules(p,"doc-",[p.getEndRule("no_regex")]),this.normalizeRules()};m.inherits(g,d);function l(){var i=s.replace("\\d","\\d\\-"),r={onMatch:function(e,t,a){var u=e.charAt(1)=="/"?2:1;return u==1?(t!=this.nextState?a.unshift(this.next,this.nextState,0):a.unshift(this.next),a[2]++):u==2&&t==this.nextState&&(a[1]--,(!a[1]||a[1]<0)&&(a.shift(),a.shift())),[{type:"meta.tag.punctuation."+(u==1?"":"end-")+"tag-open.xml",value:e.slice(0,u)},{type:"meta.tag.tag-name.xml",value:e.substr(u)}]},regex:"</?(?:"+i+"|(?=>))",next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(r);var n={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[n,r,{include:"reference"},{defaultToken:"string.xml"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,t,a){return t==a[0]&&a.shift(),e.length==2&&(a[0]==this.nextState&&a[1]--,(!a[1]||a[1]<0)&&a.splice(0,2)),this.next=a[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},n,o("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:i},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},r],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function o(i){return[{token:"comment",regex:/\/\*/,next:[p.getTagRule(),{token:"comment",regex:"\\*\\/",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[p.getTagRule(),{token:"comment",regex:"$|^",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}f.JavaScriptHighlightRules=g}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,f,v){var m=c("../range").Range,p=function(){};(function(){this.checkOutdent=function(d,s){return/^\s+$/.test(d)?/^\s*\}/.test(s):!1},this.autoOutdent=function(d,s){var g=d.getLine(s),l=g.match(/^(\s*\})/);if(!l)return 0;var o=l[1].length,i=d.findMatchingBracket({row:s,column:o});if(!i||i.row==s)return 0;var r=this.$getIndent(d.getLine(i.row));d.replace(new m(s,0,s,o-1),r)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(p.prototype),f.MatchingBraceOutdent=p}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],function(c,f,v){var m=c("../../lib/oop"),p=c("../behaviour").Behaviour,d=c("../../token_iterator").TokenIterator;function s(l,o){return l&&l.type.lastIndexOf(o+".xml")>-1}var g=function(){this.add("string_dquotes","insertion",function(l,o,i,r,n){if(n=='"'||n=="'"){var e=n,t=r.doc.getTextRange(i.getSelectionRange());if(t!==""&&t!=="'"&&t!='"'&&i.getWrapBehavioursEnabled())return{text:e+t+e,selection:!1};var a=i.getCursorPosition(),u=r.doc.getLine(a.row),x=u.substring(a.column,a.column+1),b=new d(r,a.row,a.column),h=b.getCurrentToken();if(x==e&&(s(h,"attribute-value")||s(h,"string")))return{text:"",selection:[1,1]};if(h||(h=b.stepBackward()),!h)return;for(;s(h,"tag-whitespace")||s(h,"whitespace");)h=b.stepBackward();var k=!x||x.match(/\s/);if(s(h,"attribute-equals")&&(k||x==">")||s(h,"decl-attribute-equals")&&(k||x=="?"))return{text:e+e,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(l,o,i,r,n){var e=r.doc.getTextRange(n);if(!n.isMultiLine()&&(e=='"'||e=="'")){var t=r.doc.getLine(n.start.row),a=t.substring(n.start.column+1,n.start.column+2);if(a==e)return n.end.column++,n}}),this.add("autoclosing","insertion",function(l,o,i,r,n){if(n==">"){var e=i.getSelectionRange().start,t=new d(r,e.row,e.column),a=t.getCurrentToken()||t.stepBackward();if(!a||!(s(a,"tag-name")||s(a,"tag-whitespace")||s(a,"attribute-name")||s(a,"attribute-equals")||s(a,"attribute-value"))||s(a,"reference.attribute-value"))return;if(s(a,"attribute-value")){var u=t.getCurrentTokenColumn()+a.value.length;if(e.column<u)return;if(e.column==u){var x=t.stepForward();if(x&&s(x,"attribute-value"))return;t.stepBackward()}}if(/^\s*>/.test(r.getLine(e.row).slice(e.column)))return;for(;!s(a,"tag-name");)if(a=t.stepBackward(),a.value=="<"){a=t.stepForward();break}var b=t.getCurrentTokenRow(),h=t.getCurrentTokenColumn();if(s(t.stepBackward(),"end-tag-open"))return;var k=a.value;return b==e.row&&(k=k.substring(0,e.column-h)),this.voidElements&&this.voidElements.hasOwnProperty(k.toLowerCase())?void 0:{text:"></"+k+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(l,o,i,r,n){if(n==`
`){var e=i.getCursorPosition(),t=r.getLine(e.row),a=new d(r,e.row,e.column),u=a.getCurrentToken();if(s(u,"")&&u.type.indexOf("tag-close")!==-1){if(u.value=="/>")return;for(;u&&u.type.indexOf("tag-name")===-1;)u=a.stepBackward();if(!u)return;var x=u.value,b=a.getCurrentTokenRow();if(u=a.stepBackward(),!u||u.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[x]||!this.voidElements){var h=r.getTokenAt(e.row,e.column+1),t=r.getLine(b),k=this.$getIndent(t),_=k+r.getTabString();return h&&h.value==="</"?{text:`
`+_+`
`+k,selection:[1,_.length,1,_.length]}:{text:`
`+_}}}}})};m.inherits(g,p),f.XmlBehaviour=g}),ace.define("ace/mode/behaviour/javascript",["require","exports","module","ace/lib/oop","ace/token_iterator","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml"],function(c,f,v){var m=c("../../lib/oop"),p=c("../../token_iterator").TokenIterator,d=c("../behaviour/cstyle").CstyleBehaviour,s=c("../behaviour/xml").XmlBehaviour,g=function(){var l=new s({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(l),this.inherit(d),this.add("autoclosing-fragment","insertion",function(o,i,r,n,e){if(e==">"){var t=r.getSelectionRange().start,a=new p(n,t.row,t.column),u=a.getCurrentToken()||a.stepBackward();if(!u)return;if(u.value=="<")return{text:"></>",selection:[1,1]}}})};m.inherits(g,d),f.JavaScriptBehaviour=g}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,f,v){var m=c("../../lib/oop"),p=c("../../range").Range,d=c("./fold_mode").FoldMode,s=f.FoldMode=function(o,i){d.call(this),this.voidElements=o||{},this.optionalEndTags=m.mixin({},this.voidElements),i&&m.mixin(this.optionalEndTags,i)};m.inherits(s,d);var g=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(o,i){return o.type.lastIndexOf(i+".xml")>-1}(function(){this.getFoldWidget=function(o,i,r){var n=this._getFirstTagInLine(o,r);return n?n.closing||!n.tagName&&n.selfClosing?i==="markbeginend"?"end":"":!n.tagName||n.selfClosing||this.voidElements.hasOwnProperty(n.tagName.toLowerCase())||this._findEndTagInLine(o,r,n.tagName,n.end.column)?"":"start":this.getCommentFoldWidget(o,r)},this.getCommentFoldWidget=function(o,i){return/comment/.test(o.getState(i))&&/<!-/.test(o.getLine(i))?"start":""},this._getFirstTagInLine=function(o,i){for(var r=o.getTokens(i),n=new g,e=0;e<r.length;e++){var t=r[e];if(l(t,"tag-open")){if(n.end.column=n.start.column+t.value.length,n.closing=l(t,"end-tag-open"),t=r[++e],!t)return null;if(n.tagName=t.value,t.value===""){if(t=r[++e],!t)return null;n.tagName=t.value}for(n.end.column+=t.value.length,e++;e<r.length;e++)if(t=r[e],n.end.column+=t.value.length,l(t,"tag-close")){n.selfClosing=t.value=="/>";break}return n}else if(l(t,"tag-close"))return n.selfClosing=t.value=="/>",n;n.start.column+=t.value.length}return null},this._findEndTagInLine=function(o,i,r,n){for(var e=o.getTokens(i),t=0,a=0;a<e.length;a++){var u=e[a];if(t+=u.value.length,!(t<n-1)&&l(u,"end-tag-open")&&(u=e[a+1],l(u,"tag-name")&&u.value===""&&(u=e[a+2]),u&&u.value==r))return!0}return!1},this.getFoldWidgetRange=function(o,i,r){var n=this._getFirstTagInLine(o,r);if(!n)return this.getCommentFoldWidget(o,r)&&o.getCommentFoldRange(r,o.getLine(r).length);var e=o.getMatchingTags({row:r,column:0});if(e)return new p(e.openTag.end.row,e.openTag.end.column,e.closeTag.start.row,e.closeTag.start.column)}}).call(s.prototype)}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,f,v){var m=c("../../lib/oop"),p=c("../../range").Range,d=c("./fold_mode").FoldMode,s=f.FoldMode=function(g){g&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+g.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+g.end)))};m.inherits(s,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(g,l,o){var i=g.getLine(o);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var r=this._getFoldWidgetBase(g,l,o);return!r&&this.startRegionRe.test(i)?"start":r},this.getFoldWidgetRange=function(g,l,o,i){var r=g.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(g,r,o);var t=r.match(this.foldingStartMarker);if(t){var n=t.index;if(t[1])return this.openingBracketBlock(g,t[1],o,n);var e=g.getCommentFoldRange(o,n+t[0].length,1);return e&&!e.isMultiLine()&&(i?e=this.getSectionRange(g,o):l!="all"&&(e=null)),e}if(l!=="markbegin"){var t=r.match(this.foldingStopMarker);if(t){var n=t.index+t[0].length;return t[1]?this.closingBracketBlock(g,t[1],o,n):g.getCommentFoldRange(o,n,-1)}}},this.getSectionRange=function(g,l){var o=g.getLine(l),i=o.search(/\S/),r=l,n=o.length;l=l+1;for(var e=l,t=g.getLength();++l<t;){o=g.getLine(l);var a=o.search(/\S/);if(a!==-1){if(i>a)break;var u=this.getFoldWidgetRange(g,"all",l);if(u){if(u.start.row<=r)break;if(u.isMultiLine())l=u.end.row;else if(i==a)break}e=l}}return new p(r,n,e,g.getLine(e).length)},this.getCommentRegionBlock=function(g,l,o){for(var i=l.search(/\s*$/),r=g.getLength(),n=o,e=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++o<r;){l=g.getLine(o);var a=e.exec(l);if(a&&(a[1]?t--:t++,!t))break}var u=o;if(u>n)return new p(n,i,u,l.length)}}.call(s.prototype)}),ace.define("ace/mode/folding/javascript",["require","exports","module","ace/lib/oop","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(c,f,v){var m=c("../../lib/oop"),p=c("./xml").FoldMode,d=c("./cstyle").FoldMode,s=f.FoldMode=function(g){g&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+g.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+g.end))),this.xmlFoldMode=new p};m.inherits(s,d),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(g,l,o){var i=this.getFoldWidgetBase(g,l,o);return i||this.xmlFoldMode.getFoldWidget(g,l,o)},this.getFoldWidgetRange=function(g,l,o,i){var r=this.getFoldWidgetRangeBase(g,l,o,i);return r||this.xmlFoldMode.getFoldWidgetRange(g,l,o)}}.call(s.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/javascript","ace/mode/folding/javascript"],function(c,f,v){var m=c("../lib/oop"),p=c("./text").Mode,d=c("./javascript_highlight_rules").JavaScriptHighlightRules,s=c("./matching_brace_outdent").MatchingBraceOutdent,g=c("../worker/worker_client").WorkerClient,l=c("./behaviour/javascript").JavaScriptBehaviour,o=c("./folding/javascript").FoldMode,i=function(){this.HighlightRules=d,this.$outdent=new s,this.$behaviour=new l,this.foldingRules=new o};m.inherits(i,p),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(r,n,e){var t=this.$getIndent(n),a=this.getTokenizer().getLineTokens(n,r),u=a.tokens,x=a.state;if(u.length&&u[u.length-1].type=="comment")return t;if(r=="start"||r=="no_regex"){var b=n.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);b&&(t+=e)}else if(r=="doc-start"&&(x=="start"||x=="no_regex"))return"";return t},this.checkOutdent=function(r,n,e){return this.$outdent.checkOutdent(n,e)},this.autoOutdent=function(r,n,e){this.$outdent.autoOutdent(n,e)},this.createWorker=function(r){var n=new g(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return n.attachToDocument(r.getDocument()),n.on("annotate",function(e){r.setAnnotations(e.data)}),n.on("terminate",function(){r.clearAnnotations()}),n},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(i.prototype),f.Mode=i}),function(){ace.require(["ace/mode/javascript"],function(c){y&&(y.exports=c)})}()})(R);var T=R.exports;const C=S(T),M=F({__proto__:null,default:C},[T]);export{M as m};
//# sourceMappingURL=mode-javascript-B_RXEklt.js.map
