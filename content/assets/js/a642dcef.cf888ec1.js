"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26158],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),p=r,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},36412:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const o={title:"File Sizing",toc:!0},a=void 0,s={unversionedId:"file_sizing",id:"version-0.13.0/file_sizing",title:"File Sizing",description:"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to",source:"@site/versioned_docs/version-0.13.0/file_sizing.md",sourceDirName:".",slug:"/file_sizing",permalink:"/docs/0.13.0/file_sizing",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/file_sizing.md",tags:[],version:"0.13.0",frontMatter:{title:"File Sizing",toc:!0},sidebar:"docs",previous:{title:"Marker Mechanism",permalink:"/docs/0.13.0/markers"},next:{title:"Disaster Recovery",permalink:"/docs/0.13.0/disaster_recovery"}},l=[{value:"Auto-Size During ingestion",id:"auto-size-during-ingestion",children:[{value:"For Copy-On-Write",id:"for-copy-on-write",children:[],level:3},{value:"For Merge-On-Read",id:"for-merge-on-read",children:[],level:3}],level:2},{value:"Auto-Size With Clustering",id:"auto-size-with-clustering",children:[],level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to\navoid creating small files in the first place and always write properly sized files.\nThere are 2 ways to manage small files in Hudi and below will describe the advantages and trade-offs of each."),(0,r.kt)("h2",{id:"auto-size-during-ingestion"},"Auto-Size During ingestion"),(0,r.kt)("p",null,"You can automatically manage size of files during ingestion. This solution adds a little latency during ingestion, but\nit ensures that read queries are always efficient as soon as a write is committed. If you don't\nmanage file sizing as you write and instead try to periodically run a file-sizing clean-up, your queries will be slow until that resize cleanup is periodically performed."),(0,r.kt)("p",null,"(Note: ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/write_operations"},"bulk_insert")," write operation does not provide auto-sizing during ingestion)"),(0,r.kt)("h3",{id:"for-copy-on-write"},"For Copy-On-Write"),(0,r.kt)("p",null,"This is as simple as configuring the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configurations#hoodieparquetmaxfilesize"},"maximum size for a base/parquet file"),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configurations#hoodieparquetsmallfilelimit"},"soft limit")," below which a file should\nbe considered a small file. For the initial bootstrap of a Hudi table, tuning record size estimate is also important to\nensure sufficient records are bin-packed in a parquet file. For subsequent writes, Hudi automatically uses average\nrecord size based on previous commit. Hudi will try to add enough records to a small file at write time to get it to the\nconfigured maximum limit. For e.g , with ",(0,r.kt)("inlineCode",{parentName:"p"},"compactionSmallFileSize=100MB")," and limitFileSize=120MB, Hudi will pick all\nfiles < 100MB and try to get them upto 120MB."),(0,r.kt)("h3",{id:"for-merge-on-read"},"For Merge-On-Read"),(0,r.kt)("p",null,"MergeOnRead works differently for different INDEX choices so there are few more configs to set:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Indexes with ",(0,r.kt)("strong",{parentName:"li"},"canIndexLogFiles = true")," : Inserts of new data go directly to log files. In this case, you can\nconfigure the ",(0,r.kt)("a",{parentName:"li",href:"/docs/configurations#hoodielogfilemaxsize"},"maximum log size")," and a\n",(0,r.kt)("a",{parentName:"li",href:"/docs/configurations#hoodielogfiletoparquetcompressionratio"},"factor")," that denotes reduction in\nsize when data moves from avro to parquet files."),(0,r.kt)("li",{parentName:"ul"},"Indexes with ",(0,r.kt)("strong",{parentName:"li"},"canIndexLogFiles = false")," : Inserts of new data go only to parquet files. In this case, the\nsame configurations as above for the COPY_ON_WRITE case applies.")),(0,r.kt)("p",null,"NOTE : In either case, small files will be auto sized only if there is no PENDING compaction or associated log file for\nthat particular file slice. For example, for case 1: If you had a log file and a compaction C1 was scheduled to convert\nthat log file to parquet, no more inserts can go into that log file. For case 2: If you had a parquet file and an update\nended up creating an associated delta log file, no more inserts can go into that parquet file. Only after the compaction\nhas been performed and there are NO log files associated with the base parquet file, can new inserts be sent to auto size that parquet file."),(0,r.kt)("h2",{id:"auto-size-with-clustering"},"Auto-Size With Clustering"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/next/clustering"},"Clustering"))," is a feature in Hudi to group\nsmall files into larger ones either synchronously or asynchronously. Since first solution of auto-sizing small files has\na tradeoff on ingestion speed (since the small files are sized during ingestion), if your use-case is very sensitive to\ningestion latency where you don't want to compromise on ingestion speed which may end up creating a lot of small files,\nclustering comes to the rescue. Clustering can be scheduled through the ingestion job and an asynchronus job can stitch\nsmall files together in the background to generate larger files. NOTE that during this, ingestion can continue to run concurrently."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that Hudi always creates immutable files on disk. To be able to do auto-sizing or clustering, Hudi will\nalways create a newer version of the smaller file, resulting in 2 versions of the same file.\nThe ",(0,r.kt)("a",{parentName:"em",href:"/docs/next/hoodie_cleaner"},"cleaner service")," will later kick in and delete the older version small file and keep the latest one.")))}d.isMDXComponent=!0}}]);