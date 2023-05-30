"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[56749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69326:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},o=void 0,s={unversionedId:"clustering",id:"version-0.13.0/clustering",title:"Clustering",description:"Background",source:"@site/versioned_docs/version-0.13.0/clustering.md",sourceDirName:".",slug:"/clustering",permalink:"/cn/docs/0.13.0/clustering",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/clustering.md",tags:[],version:"0.13.0",frontMatter:{title:"Clustering",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Compaction",permalink:"/cn/docs/0.13.0/compaction"},next:{title:"Metadata Indexing",permalink:"/cn/docs/0.13.0/metadata_indexing"}},l=[{value:"Background",id:"background",children:[],level:2},{value:"Clustering Architecture",id:"clustering-architecture",children:[{value:"Overall, there are 2 parts to clustering",id:"overall-there-are-2-parts-to-clustering",children:[],level:3},{value:"Scheduling clustering",id:"scheduling-clustering",children:[],level:3},{value:"Running clustering",id:"running-clustering",children:[],level:3},{value:"Setting up clustering",id:"setting-up-clustering",children:[],level:3}],level:2},{value:"Async Clustering - Strategies",id:"async-clustering---strategies",children:[{value:"Plan Strategy",id:"plan-strategy",children:[],level:3},{value:"Execution Strategy",id:"execution-strategy",children:[],level:3},{value:"Update Strategy",id:"update-strategy",children:[],level:3}],level:2},{value:"Asynchronous Clustering",id:"asynchronous-clustering",children:[{value:"HoodieClusteringJob",id:"hoodieclusteringjob",children:[],level:3},{value:"HoodieDeltaStreamer",id:"hoodiedeltastreamer",children:[],level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:3}],level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This doc introduces a new kind of table service called clustering ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance"},"[RFC-19]")," to reorganize data for improved query performance without compromising on ingestion speed."),(0,i.kt)("h2",{id:"clustering-architecture"},"Clustering Architecture"),(0,i.kt)("p",null,"At a high level, Hudi provides different operations such as insert/upsert/bulk_insert through it\u2019s write client API to be able to write data to a Hudi table. To be able to choose a trade-off between file size and ingestion speed, Hudi provides a knob ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.parquet.small.file.limit")," to be able to configure the smallest allowable file size. Users are able to configure the small file ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodieparquetsmallfilelimit"},"soft limit")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to force new data to go into a new set of filegroups or set it to a higher value to ensure new data gets \u201cpadded\u201d to existing files until it meets that limit that adds to ingestion latencies."),(0,i.kt)("p",null,"To be able to support an architecture that allows for fast ingestion without compromising query performance, we have introduced a \u2018clustering\u2019 service to rewrite the data to optimize Hudi data lake file layout."),(0,i.kt)("p",null,"Clustering table service can run asynchronously or synchronously adding a new action type called \u201cREPLACE\u201d, that will mark the clustering action in the Hudi metadata timeline."),(0,i.kt)("h3",{id:"overall-there-are-2-parts-to-clustering"},"Overall, there are 2 parts to clustering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scheduling clustering: Create a clustering plan using a pluggable clustering strategy."),(0,i.kt)("li",{parentName:"ol"},"Execute clustering: Process the plan using an execution strategy to create new files and replace old files.")),(0,i.kt)("h3",{id:"scheduling-clustering"},"Scheduling clustering"),(0,i.kt)("p",null,"Following steps are followed to schedule clustering."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify files that are eligible for clustering: Depending on the clustering strategy chosen, the scheduling logic will identify the files eligible for clustering."),(0,i.kt)("li",{parentName:"ol"},"Group files that are eligible for clustering based on specific criteria. Each group is expected to have data size in multiples of \u2018targetFileSize\u2019. Grouping is done as part of \u2018strategy\u2019 defined in the plan. Additionally, there is an option to put a cap on group size to improve parallelism and avoid shuffling large amounts of data."),(0,i.kt)("li",{parentName:"ol"},"Finally, the clustering plan is saved to the timeline in an avro ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/avro/HoodieClusteringPlan.avsc"},"metadata format"),".")),(0,i.kt)("h3",{id:"running-clustering"},"Running clustering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the clustering plan and get the \u2018clusteringGroups\u2019 that mark the file groups that need to be clustered."),(0,i.kt)("li",{parentName:"ol"},"For each group, we instantiate appropriate strategy class with strategyParams (example: sortColumns) and apply that strategy to rewrite the data."),(0,i.kt)("li",{parentName:"ol"},"Create a \u201cREPLACE\u201d commit and update the metadata in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieReplaceCommitMetadata.java"},"HoodieReplaceCommitMetadata"),".")),(0,i.kt)("p",null,"Clustering Service builds on Hudi\u2019s MVCC based design to allow for writers to continue to insert new data while clustering action runs in the background to reformat data layout, ensuring snapshot isolation between concurrent readers and writers."),(0,i.kt)("p",null,"NOTE: Clustering can only be scheduled for tables / partitions not receiving any concurrent updates. In the future, concurrent updates use-case will be supported as well."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clustering example",src:n(43727).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Illustrating query performance improvements by clustering")),(0,i.kt)("h3",{id:"setting-up-clustering"},"Setting up clustering"),(0,i.kt)("p",null,"Inline clustering can be setup easily using spark dataframe options. See sample below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\n\nval df =  //generate data frame\ndf.write.format("org.apache.hudi").\n        options(getQuickstartWriteConfigs).\n        option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n        option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n        option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n        option(TABLE_NAME, "tableName").\n        option("hoodie.parquet.small.file.limit", "0").\n        option("hoodie.clustering.inline", "true").\n        option("hoodie.clustering.inline.max.commits", "4").\n        option("hoodie.clustering.plan.strategy.target.file.max.bytes", "1073741824").\n        option("hoodie.clustering.plan.strategy.small.file.limit", "629145600").\n        option("hoodie.clustering.plan.strategy.sort.columns", "column1,column2"). //optional, if sorting is needed as part of rewriting data\n        mode(Append).\n        save("dfs://location");\n')),(0,i.kt)("h2",{id:"async-clustering---strategies"},"Async Clustering - Strategies"),(0,i.kt)("p",null,"For more advanced usecases, async clustering pipeline can also be setup. See an example ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob"},"here"),"."),(0,i.kt)("p",null,"On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. Hudi supports ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing"},"multi-writers")," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background."),(0,i.kt)("p",null,"As mentioned before, clustering plan as well as execution depends on configurable strategy. These strategies can be\nbroadly classified into three types: clustering plan strategy, execution strategy and update strategy."),(0,i.kt)("h3",{id:"plan-strategy"},"Plan Strategy"),(0,i.kt)("p",null,"This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered.\nLet's look at different plan strategies that are available with Hudi. Note that these strategies are easily pluggable\nusing this ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodieclusteringplanstrategyclass"},"config"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SparkSizeBasedClusteringPlanStrategy"),": It selects file slices based on\nthe ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations/#hoodieclusteringplanstrategysmallfilelimit"},"small file limit"),"\nof base files and creates clustering groups upto max file size allowed per group. The max size can be specified using\nthis ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations/#hoodieclusteringplanstrategymaxbytespergroup"},"config"),". This\nstrategy is useful for stitching together medium-sized files into larger ones to reduce lot of files spread across\ncold partitions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SparkRecentDaysClusteringPlanStrategy"),": It looks back previous 'N' days partitions and creates a plan that will\ncluster the 'small' file slices within those partitions. This is the default strategy. It could be useful when the\nworkload is predictable and data is partitioned by time."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SparkSelectedPartitionsClusteringPlanStrategy"),": In case you want to cluster only specific partitions within a range,\nno matter how old or new are those partitions, then this strategy could be useful. To use this strategy, one needs\nto set below two configs additionally (both begin and end partitions are inclusive):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hoodie.clustering.plan.strategy.cluster.begin.partition\nhoodie.clustering.plan.strategy.cluster.end.partition\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the strategies are partition-aware and the latter two are still bound by the size limits of the first strategy."))),(0,i.kt)("h3",{id:"execution-strategy"},"Execution Strategy"),(0,i.kt)("p",null,"After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using this ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass"},"config"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SparkSortAndSizeExecutionStrategy")," is the default strategy. Users can specify the columns to sort the data by, when\nclustering using\nthis ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringplanstrategysortcolumns"},"config"),". Apart from\nthat, we can also set ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieparquetmaxfilesize"},"max file size"),"\nfor the parquet files produced due to clustering. The strategy uses bulk insert to write data into new files, in which\ncase, Hudi implicitly uses a partitioner that does sorting based on specified columns. In this way, the strategy changes\nthe data layout in a way that not only improves query performance but also balance rewrite overhead automatically."),(0,i.kt)("p",null,"Now this strategy can be executed either as a single spark job or multiple jobs depending on number of clustering groups\ncreated in the planning phase. By default, Hudi will submit multiple spark jobs and union the results. In case you want\nto force Hudi to use single spark job, set the execution strategy\nclass ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringexecutionstrategyclass"},"config"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleSparkJobExecutionStrategy"),"."),(0,i.kt)("h3",{id:"update-strategy"},"Update Strategy"),(0,i.kt)("p",null,"Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodieclusteringupdatesstrategy"},"config for update strategy")," is\nset to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"SparkRejectUpdateStrategy")),". If some file group has updates during clustering then it will reject updates and\nthrow an exception. However, in some use-cases updates are very sparse and do not touch most file groups. The default\nstrategy to simply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"SparkAllowUpdateStrategy")),"."),(0,i.kt)("p",null,"We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations/#Clustering-Configs"},"here"),". Out of this list, a few\nconfigurations that will be very useful are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Config key"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.async.enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable running of clustering service, asynchronously as writes happen on the table."),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.async.max.commits")),(0,i.kt)("td",{parentName:"tr",align:null},"Control frequency of async clustering by specifying after how many commits clustering should be triggered."),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.clustering.preserve.commit.metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"When rewriting data, preserves existing _hoodie_commit_time. This means users can run incremental queries on clustered data without any side-effects."),(0,i.kt)("td",{parentName:"tr",align:null},"False")))),(0,i.kt)("h2",{id:"asynchronous-clustering"},"Asynchronous Clustering"),(0,i.kt)("p",null,"Users can leverage ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob"},"HoodieClusteringJob"),"\nto setup 2-step asynchronous clustering."),(0,i.kt)("h3",{id:"hoodieclusteringjob"},"HoodieClusteringJob"),(0,i.kt)("p",null,"By specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduleAndExecute")," mode both schedule as well as clustering can be achieved in the same step.\nThe appropriate mode can be specified using ",(0,i.kt)("inlineCode",{parentName:"p"},"-mode")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-m")," option. There are three modes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"schedule"),": Make a clustering plan. This gives an instant which can be passed in execute mode."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"execute"),": Execute a clustering plan at a particular instant. If no instant-time is specified, HoodieClusteringJob will execute for the earliest instant on the Hudi timeline."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduleAndExecute"),": Make a clustering plan first and execute that plan immediately.")),(0,i.kt)("p",null,"Note that to run this job while the original writer is still running, please enable multi-writing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n")),(0,i.kt)("p",null,"A sample spark-submit command to setup HoodieClusteringJob is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n")),(0,i.kt)("p",null,"A sample ",(0,i.kt)("inlineCode",{parentName:"p"},"clusteringjob.properties")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n")),(0,i.kt)("h3",{id:"hoodiedeltastreamer"},"HoodieDeltaStreamer"),(0,i.kt)("p",null,"This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with DeltaStreamer.\nJust set the ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.clustering.async.enabled")," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2014props")," when starting the deltastreamer (just like in the case of HoodieClusteringJob)."),(0,i.kt)("p",null,"A sample spark-submit command to setup HoodieDeltaStreamer is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n")),(0,i.kt)("h3",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,i.kt)("p",null,"We can also enable asynchronous clustering with Spark structured streaming sink as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n')))}p.isMDXComponent=!0},43727:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example_perf_improvement-acd223093d7c84fb6f0a896dcb571737.png"}}]);