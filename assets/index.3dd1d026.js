import{e as p,m as b}from"./editor.api.d8951072.js";import{m as B}from"./editor.api.d8951072.js";import{r as t,j as $}from"./index.55494b90.js";function w(e){return/^\d+$/.test(e)?"".concat(e,"px"):e}function M(){}var E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(e){for(var u,l=1,r=arguments.length;l<r;l++){u=arguments[l];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a])}return e},E.apply(this,arguments)};function L(e){var u=e.width,l=e.height,r=e.value,a=e.defaultValue,f=e.language,d=e.theme,v=e.options,S=e.overrideServices,j=e.editorWillMount,D=e.editorDidMount,N=e.editorWillUnmount,U=e.onChange,c=e.className,h=e.original,o=t.exports.useRef(null),n=t.exports.useRef(null),x=t.exports.useRef(null),y=t.exports.useRef(null),W=w(u),C=w(l),V=t.exports.useMemo(function(){return{width:W,height:C}},[W,C]),R=function(){var i=j(b);return i||{}},T=function(){D(n.current,b);var i=n.current.getModel().modified;x.current=i.onDidChangeContent(function(m){y.current||U(i.getValue(),m)})},P=function(){N(n.current,b)},s=function(){var i=r!=null?r:a,m=p.createModel(h,f),O=p.createModel(i,f);n.current.setModel({original:m,modified:O})};return t.exports.useEffect(function(){o.current&&(R(),n.current=p.createDiffEditor(o.current,E(E(E({},c?{extraEditorClassName:c}:{}),v),d?{theme:d}:{}),S),s(),T())},[]),t.exports.useEffect(function(){n.current&&n.current.updateOptions(E(E({},c?{extraEditorClassName:c}:{}),v))},[c,v]),t.exports.useEffect(function(){n.current&&n.current.layout()},[u,l]),t.exports.useEffect(function(){if(n.current){var i=n.current.getModel(),m=i.original,O=i.modified;p.setModelLanguage(m,f),p.setModelLanguage(O,f)}},[f]),t.exports.useEffect(function(){if(n.current){var i=n.current.getModel().modified;y.current=!0,n.current.getModifiedEditor().pushUndoStop(),i.pushEditOperations([],[{range:i.getFullModelRange(),text:r}]),n.current.getModifiedEditor().pushUndoStop(),y.current=!1}},[r]),t.exports.useEffect(function(){p.setTheme(d)},[d]),t.exports.useEffect(function(){if(n.current){var i=n.current.getModel().original;h!==i.getValue()&&i.setValue(h)}},[h]),t.exports.useEffect(function(){return function(){if(n.current){P(),n.current.dispose();var i=n.current.getModel(),m=i.original,O=i.modified;m&&m.dispose(),O&&O.dispose()}x.current&&x.current.dispose()}},[]),$("div",{ref:o,style:V,className:"react-monaco-editor-container"})}L.defaultProps={width:"100%",height:"100%",original:null,value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorWillMount:M,editorDidMount:M,editorWillUnmount:M,onChange:M,className:null};var g=globalThis&&globalThis.__assign||function(){return g=Object.assign||function(e){for(var u,l=1,r=arguments.length;l<r;l++){u=arguments[l];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a])}return e},g.apply(this,arguments)},F=globalThis&&globalThis.__rest||function(e,u){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&u.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)u.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]]);return l};function H(e){var u=e.width,l=e.height,r=e.value,a=e.defaultValue,f=e.language,d=e.theme,v=e.options,S=e.overrideServices,j=e.editorWillMount,D=e.editorDidMount,N=e.editorWillUnmount,U=e.onChange,c=e.className,h=t.exports.useRef(null),o=t.exports.useRef(null),n=t.exports.useRef(null),x=t.exports.useRef(null),y=w(u),W=w(l),C=t.exports.useMemo(function(){return{width:y,height:W}},[y,W]),V=function(){var s=j(b);return s||{}},R=function(){D(o.current,b),n.current=o.current.onDidChangeModelContent(function(s){x.current||U(o.current.getValue(),s)})},T=function(){N(o.current,b)},P=function(){var s=r!==null?r:a;if(h.current){var i=g(g({},v),V());o.current=p.create(h.current,g(g(g({value:s,language:f},c?{extraEditorClassName:c}:{}),i),d?{theme:d}:{}),S),R()}};return t.exports.useEffect(P,[]),t.exports.useEffect(function(){if(o.current){var s=o.current.getModel();x.current=!0,o.current.pushUndoStop(),s.pushEditOperations([],[{range:s.getFullModelRange(),text:r}],void 0),o.current.pushUndoStop(),x.current=!1}},[r]),t.exports.useEffect(function(){if(o.current){var s=o.current.getModel();p.setModelLanguage(s,f)}},[f]),t.exports.useEffect(function(){if(o.current){v.model;var s=F(v,["model"]);o.current.updateOptions(g(g({},c?{extraEditorClassName:c}:{}),s))}},[c,v]),t.exports.useEffect(function(){o.current&&o.current.layout()},[u,l]),t.exports.useEffect(function(){p.setTheme(d)},[d]),t.exports.useEffect(function(){return function(){if(o.current){T(),o.current.dispose();var s=o.current.getModel();s&&s.dispose()}n.current&&n.current.dispose()}},[]),$("div",{ref:h,style:C,className:"react-monaco-editor-container"})}H.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorWillMount:M,editorDidMount:M,editorWillUnmount:M,onChange:M,className:null};export{L as MonacoDiffEditor,H as default,B as monaco};
