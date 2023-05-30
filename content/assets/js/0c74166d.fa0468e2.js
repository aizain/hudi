"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[97189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,h=p["".concat(o,".").concat(g)]||p[g]||d[g]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46921:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},l=void 0,s={unversionedId:"clustering",id:"version-0.13.1/clustering",title:"Clustering",description:"Background",source:"@site/versioned_docs/version-0.13.1/clustering.md",sourceDirName:".",slug:"/clustering",permalink:"/docs/clustering",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/clustering.md",tags:[],version:"0.13.1",frontMatter:{title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Compaction",permalink:"/docs/compaction"},next:{title:"Metadata Indexing",permalink:"/docs/metadata_indexing"}},o=[{value:"Background",id:"background",children:[],level:2},{value:"How is compaction different from clustering?",id:"how-is-compaction-different-from-clustering",children:[],level:2},{value:"Clustering Architecture",id:"clustering-architecture",children:[{value:"Overall, there are 2 steps to clustering",id:"overall-there-are-2-steps-to-clustering",children:[],level:3},{value:"Schedule clustering",id:"schedule-clustering",children:[],level:3},{value:"Execute clustering",id:"execute-clustering",children:[],level:3}],level:2},{value:"Clustering Usecases",id:"clustering-usecases",children:[{value:"Batching small files",id:"batching-small-files",children:[],level:3},{value:"Cluster by sort key",id:"cluster-by-sort-key",children:[],level:3}],level:2},{value:"Clustering Strategies",id:"clustering-strategies",children:[{value:"Plan Strategy",id:"plan-strategy",children:[{value:"Size-based clustering strategies",id:"size-based-clustering-strategies",children:[],level:4},{value:"SparkSingleFileSortPlanStrategy",id:"sparksinglefilesortplanstrategy",children:[],level:4},{value:"SparkConsistentBucketClusteringPlanStrategy",id:"sparkconsistentbucketclusteringplanstrategy",children:[],level:4}],level:3},{value:"Execution Strategy",id:"execution-strategy",children:[],level:3},{value:"Update Strategy",id:"update-strategy",children:[],level:3}],level:2},{value:"Inline clustering",id:"inline-clustering",children:[],level:2},{value:"Async Clustering",id:"async-clustering",children:[],level:2},{value:"Setup Asynchronous Clustering",id:"setup-asynchronous-clustering",children:[{value:"HoodieClusteringJob",id:"hoodieclusteringjob",children:[],level:3},{value:"HoodieDeltaStreamer",id:"hoodiedeltastreamer",children:[],level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:3}],level:2}],u={toc:o},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This doc introduces a new kind of table service called clustering ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance"},"[RFC-19]")," to reorganize data for improved query performance without compromising on ingestion speed."),(0,a.kt)("h2",{id:"how-is-compaction-different-from-clustering"},"How is compaction different from clustering?"),(0,a.kt)("p",null,"Hudi is modeled like a log-structured storage engine with multiple versions of the data.\nParticularly, ",(0,a.kt)("a",{parentName:"p",href:"/docs/table_types#merge-on-read-table"},"Merge-On-Read"),"\ntables in Hudi store data using a combination of base file in columnar format and row-based delta logs that contain\nupdates. Compaction is a way to merge the delta logs with base files to produce the latest file slices with the most\nrecent snapshot of data. Compaction helps to keep the query performance in check (larger delta log files would incur\nlonger merge times on query side). On the other hand, clustering is a data layout optimization technique. One can stitch\ntogether small files into larger files using clustering. Additionally, data can be clustered by sort key so that queries\ncan take advantage of data locality."),(0,a.kt)("h2",{id:"clustering-architecture"},"Clustering Architecture"),(0,a.kt)("p",null,"At a high level, Hudi provides different operations such as insert/upsert/bulk_insert through it\u2019s write client API to be able to write data to a Hudi table. To be able to choose a trade-off between file size and ingestion speed, Hudi provides a knob ",(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.parquet.small.file.limit")," to be able to configure the smallest allowable file size. Users are able to configure the small file ",(0,a.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodieparquetsmallfilelimit"},"soft limit")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to force new data to go into a new set of filegroups or set it to a higher value to ensure new data gets \u201cpadded\u201d to existing files until it meets that limit that adds to ingestion latencies."),(0,a.kt)("p",null,"To be able to support an architecture that allows for fast ingestion without compromising query performance, we have introduced a \u2018clustering\u2019 service to rewrite the data to optimize Hudi data lake file layout."),(0,a.kt)("p",null,"Clustering table service can run asynchronously or synchronously adding a new action type called \u201cREPLACE\u201d, that will mark the clustering action in the Hudi metadata timeline."),(0,a.kt)("h3",{id:"overall-there-are-2-steps-to-clustering"},"Overall, there are 2 steps to clustering"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Scheduling clustering: Create a clustering plan using a pluggable clustering strategy."),(0,a.kt)("li",{parentName:"ol"},"Execute clustering: Process the plan using an execution strategy to create new files and replace old files.")),(0,a.kt)("h3",{id:"schedule-clustering"},"Schedule clustering"),(0,a.kt)("p",null,"Following steps are followed to schedule clustering."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify files that are eligible for clustering: Depending on the clustering strategy chosen, the scheduling logic will identify the files eligible for clustering."),(0,a.kt)("li",{parentName:"ol"},"Group files that are eligible for clustering based on specific criteria. Each group is expected to have data size in multiples of \u2018targetFileSize\u2019. Grouping is done as part of \u2018strategy\u2019 defined in the plan. Additionally, there is an option to put a cap on group size to improve parallelism and avoid shuffling large amounts of data."),(0,a.kt)("li",{parentName:"ol"},"Finally, the clustering plan is saved to the timeline in an avro ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/avro/HoodieClusteringPlan.avsc"},"metadata format"),".")),(0,a.kt)("h3",{id:"execute-clustering"},"Execute clustering"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read the clustering plan and get the \u2018clusteringGroups\u2019 that mark the file groups that need to be clustered."),(0,a.kt)("li",{parentName:"ol"},"For each group, we instantiate appropriate strategy class with strategyParams (example: sortColumns) and apply that strategy to rewrite the data."),(0,a.kt)("li",{parentName:"ol"},"Create a \u201cREPLACE\u201d commit and update the metadata in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieReplaceCommitMetadata.java"},"HoodieReplaceCommitMetadata"),".")),(0,a.kt)("p",null,"Clustering Service builds on Hudi\u2019s MVCC based design to allow for writers to continue to insert new data while clustering action runs in the background to reformat data layout, ensuring snapshot isolation between concurrent readers and writers."),(0,a.kt)("p",null,"NOTE: Clustering can only be scheduled for tables / partitions not receiving any concurrent updates. In the future, concurrent updates use-case will be supported as well."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Clustering example",src:n(43727).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Figure: Illustrating query performance improvements by clustering")),(0,a.kt)("h2",{id:"clustering-usecases"},"Clustering Usecases"),(0,a.kt)("h3",{id:"batching-small-files"},"Batching small files"),(0,a.kt)("p",null,"As mentioned in the intro, streaming ingestion generally results in smaller files in your data lake. But having a lot of\nsuch small files could lead to higher query latency. From our experience supporting community users, there are quite a\nfew users who are using Hudi just for small file handling capabilities. So, you could employ clustering to batch a lot\nof such small files into larger ones."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Batching small files",src:n(92288).Z})),(0,a.kt)("h3",{id:"cluster-by-sort-key"},"Cluster by sort key"),(0,a.kt)("p",null,"Another classic problem in data lake is the arrival time vs event time problem. Generally you write data based on\narrival time, while query predicates do not sit well with it. With clustering, you can re-write your data by sorting\nbased on query predicates and so, your data skipping will be very efficient and your query can ignore scanning a lot of\nunnecessary data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Batching small files",src:n(23073).Z})),(0,a.kt)("h2",{id:"clustering-strategies"},"Clustering Strategies"),(0,a.kt)("p",null,"On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. As mentioned before, clustering plan as well as execution depends on configurable\nstrategy. These strategies can be broadly classified into three types: clustering plan strategy, execution strategy and\nupdate strategy."),(0,a.kt)("h3",{id:"plan-strategy"},"Plan Strategy"),(0,a.kt)("p",null,"This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered\nand how many output file groups should the clustering produce. Note that these strategies are easily pluggable using the\nconfig ",(0,a.kt)("a",{parentName:"p",href:"/docs/configurations#hoodieclusteringplanstrategyclass"},"hoodie.clustering.plan.strategy.class"),"."),(0,a.kt)("p",null,"Different plan strategies are as follows:"),(0,a.kt)("h4",{id:"size-based-clustering-strategies"},"Size-based clustering strategies"),(0,a.kt)("p",null,"This strategy creates clustering groups based on max size allowed per group. Also, it excludes files that are greater\nthan the small file limit from the clustering plan. Available strategies depending on write client\nare: ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkSizeBasedClusteringPlanStrategy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FlinkSizeBasedClusteringPlanStrategy"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaSizeBasedClusteringPlanStrategy"),". Furthermore, Hudi provides flexibility to include or exclude partitions for\nclustering, tune the file size limits, maximum number of output groups, as we will see below."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.partition.selected"),": Comma separated list of partitions to be considered for\nclustering."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.partition.regex.pattern"),": Filters clustering partitions that matched regex pattern."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.partition.filter.mode"),": In addition to previous filtering, we have few additional filtering as\nwell. Different values for this mode are ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RECENT_DAYS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECTED_PARTITIONS"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NONE"),": do not filter table partition and thus the clustering plan will include all partitions that have clustering\ncandidate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RECENT_DAYS"),": keep a continuous range of partitions, works together with the below configs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.plan.strategy.daybased.lookback.partitions"),": Number of partitions to list to create\nClusteringPlan."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.plan.strategy.daybased.skipfromlatest.partitions"),": Number of partitions to skip from latest when\nchoosing partitions to create ClusteringPlan. As the name implies, applicable only if partitioning is day based."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECTED_PARTITIONS"),": keep partitions that are in the specified range based on below configs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.plan.strategy.cluster.begin.partition"),": Begin partition used to filter partition (inclusive)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.plan.strategy.cluster.end.partition"),": End partition used to filter partition (inclusive)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAY_ROLLING"),": cluster partitions on a rolling basis by the hour to avoid clustering all partitions each time.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Small file limit")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.small.file.limit"),": Files smaller than the size in bytes specified here are candidates\nfor clustering. Larges file groups will be ignored."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max number of groups")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.max.num.groups"),": Maximum number of groups to create as part of ClusteringPlan.\nIncreasing groups will increase parallelism. This does not imply the number of output file groups as such. This refers\nto clustering groups (parallel tasks/threads that will work towards producing output file groups). Total output file\ngroups is also determined by based on target file size which we will discuss shortly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max bytes per group")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.max.bytes.per.group"),": Each clustering operation can create multiple output file groups.\nTotal amount of data processed by clustering operation is defined by below two properties (Max bytes per group * Max num\ngroups. Thus, this config will assist in capping the max amount of data to be included in one group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Target file size max")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.plan.strategy.target.file.max.bytes"),": Each group can produce \u2019N\u2019 (max group size /target file size)\noutput file groups."),(0,a.kt)("h4",{id:"sparksinglefilesortplanstrategy"},"SparkSingleFileSortPlanStrategy"),(0,a.kt)("p",null,"In this strategy, clustering group for each partition is built in the same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkSizeBasedClusteringPlanStrategy"),"\n. The difference is that the output group is 1 and file group id remains the same,\nwhile ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkSizeBasedClusteringPlanStrategy")," can create multiple file groups with newer fileIds."),(0,a.kt)("h4",{id:"sparkconsistentbucketclusteringplanstrategy"},"SparkConsistentBucketClusteringPlanStrategy"),(0,a.kt)("p",null,"This strategy is specifically used for consistent bucket index. This will be leveraged to expand your bucket index (from\nstatic partitioning to dynamic). Typically, users don\u2019t need to use this strategy. Hudi internally uses this for\ndynamically expanding the buckets for bucket index datasets."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The latter two strategies are applicable only for the Spark engine.")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("h3",{id:"execution-strategy"},"Execution Strategy"),(0,a.kt)("p",null,"After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using the\nconfig ",(0,a.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass"},"hoodie.clustering.execution.strategy.class"),". By\ndefault, Hudi sorts the file groups in the plan by the specified columns, while meeting the configured target file\nsizes."),(0,a.kt)("p",null,"The available strategies are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SPARK_SORT_AND_SIZE_EXECUTION_STRATEGY"),": Uses bulk_insert to re-write data from input file groups.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.execution.strategy.class"),"\nto ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.plan.strategy.sort.columns"),": Columns to sort the data while clustering. This goes in\nconjunction with layout optimization strategies depending on your query predicates. One can set comma separated\nlist of columns that needs to be sorted in this config."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JAVA_SORT_AND_SIZE_EXECUTION_STRATEGY"),": Similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"SPARK_SORT_AND_SIZE_EXECUTION_STRATEGY"),", for the Java and Flink\nengines. Set ",(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.execution.strategy.class"),"\nto ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.hudi.client.clustering.run.strategy.JavaSortAndSizeExecutionStrategy"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SPARK_CONSISTENT_BUCKET_EXECUTION_STRATEGY"),": As the name implies, this is applicable to dynamically expand\nconsistent bucket index and only applicable to the Spark engine. Set ",(0,a.kt)("inlineCode",{parentName:"li"},"hoodie.clustering.execution.strategy.class"),"\nto ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.hudi.client.clustering.run.strategy.SparkConsistentBucketClusteringExecutionStrategy"),".")),(0,a.kt)("h3",{id:"update-strategy"},"Update Strategy"),(0,a.kt)("p",null,"Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringupdatesstrategy"},"config for update strategy")," is set to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\nSparkRejectUpdateStrategy")),". If some file group has updates during clustering then it will reject updates and throw an\nexception. However, in some use-cases updates are very sparse and do not touch most file groups. The default strategy to\nsimply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"SparkAllowUpdateStrategy")),"."),(0,a.kt)("p",null,"We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,a.kt)("a",{parentName:"p",href:"/docs/configurations/#Clustering-Configs"},"here"),". Out of this list, a few configurations that will be very useful\nfor inline or async clustering are shown below with code samples."),(0,a.kt)("h2",{id:"inline-clustering"},"Inline clustering"),(0,a.kt)("p",null,"Inline clustering happens synchronously with the regular ingestion writer, which means the next round of ingestion\ncannot proceed until the clustering is complete. Inline clustering can be setup easily using spark dataframe options.\nSee sample below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\n\nval df =  //generate data frame\ndf.write.format("org.apache.hudi").\n        options(getQuickstartWriteConfigs).\n        option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n        option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n        option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n        option(TABLE_NAME, "tableName").\n        option("hoodie.parquet.small.file.limit", "0").\n        option("hoodie.clustering.inline", "true").\n        option("hoodie.clustering.inline.max.commits", "4").\n        option("hoodie.clustering.plan.strategy.target.file.max.bytes", "1073741824").\n        option("hoodie.clustering.plan.strategy.small.file.limit", "629145600").\n        option("hoodie.clustering.plan.strategy.sort.columns", "column1,column2"). //optional, if sorting is needed as part of rewriting data\n        mode(Append).\n        save("dfs://location");\n')),(0,a.kt)("h2",{id:"async-clustering"},"Async Clustering"),(0,a.kt)("p",null,"Async clustering runs the clustering table service in the background without blocking the regular ingestions writers.\nHudi supports ",(0,a.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing"},"multi-writers")," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Config key"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.async.enabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Enable running of clustering service, asynchronously as writes happen on the table."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.async.max.commits")),(0,a.kt)("td",{parentName:"tr",align:null},"Control frequency of async clustering by specifying after how many commits clustering should be triggered."),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.preserve.commit.metadata")),(0,a.kt)("td",{parentName:"tr",align:null},"When rewriting data, preserves existing _hoodie_commit_time. This means users can run incremental queries on clustered data without any side-effects."),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h2",{id:"setup-asynchronous-clustering"},"Setup Asynchronous Clustering"),(0,a.kt)("p",null,"Users can leverage ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob"},"HoodieClusteringJob"),"\nto setup 2-step asynchronous clustering."),(0,a.kt)("h3",{id:"hoodieclusteringjob"},"HoodieClusteringJob"),(0,a.kt)("p",null,"By specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduleAndExecute")," mode both schedule as well as clustering can be achieved in the same step.\nThe appropriate mode can be specified using ",(0,a.kt)("inlineCode",{parentName:"p"},"-mode")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," option. There are three modes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"schedule"),": Make a clustering plan. This gives an instant which can be passed in execute mode."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"execute"),": Execute a clustering plan at a particular instant. If no instant-time is specified, HoodieClusteringJob will execute for the earliest instant on the Hudi timeline."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"scheduleAndExecute"),": Make a clustering plan first and execute that plan immediately.")),(0,a.kt)("p",null,"Note that to run this job while the original writer is still running, please enable multi-writing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n")),(0,a.kt)("p",null,"A sample spark-submit command to setup HoodieClusteringJob is as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n")),(0,a.kt)("p",null,"A sample ",(0,a.kt)("inlineCode",{parentName:"p"},"clusteringjob.properties")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n")),(0,a.kt)("h3",{id:"hoodiedeltastreamer"},"HoodieDeltaStreamer"),(0,a.kt)("p",null,"This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with DeltaStreamer.\nJust set the ",(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.async.enabled")," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2014props")," when starting the deltastreamer (just like in the case of HoodieClusteringJob)."),(0,a.kt)("p",null,"A sample spark-submit command to setup HoodieDeltaStreamer is as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n")),(0,a.kt)("h3",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,a.kt)("p",null,"We can also enable asynchronous clustering with Spark structured streaming sink as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n')))}p.isMDXComponent=!0},43727:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/example_perf_improvement-acd223093d7c84fb6f0a896dcb571737.png"},92288:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/clustering_small_files-060489fdacfa64a9c16c82a06e7d6c50.gif"},23073:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/clustering_sort-727259cb20686386dcf5406b53d67ee5.gif"}}]);