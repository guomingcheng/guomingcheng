## 简介
#### <div class="biaoti2"></div>  Elasticsearch 是一个解决搜索引擎的方案
> <span id='gonglian'>Elasticsearch (ES) 是一个基于 Lucene 构建开源的、分布式、RESTful 风格接口的全文搜索引擎，还是一个分布式文档数据</span> 
> <span id='gonglian'>库，其中每个字段均是被索引的数据且可被搜索，他能够扩展至数以百计的服务器存储以及处理 PB 级的数据，它可以在很短的时间内在存储、搜索和分析大量的数据。它通常作为具有负载搜索场景情况下的核心发动机</span> 
>> ES 存储结构<br>
>> <span id='gonglian'>Elasticsearch 是一个文件存储结构，是面向文档型数据库，一条数据在这里就是一个文件，用 JSON 为文档序列化的格式。如下这样格式:</span> 
>>```js
>>{
>>    "name": '郭明城'
>>}
>>```

## 环境安装
#### <div class="biaoti2"></div>  居于 Liunx 环境下安装 Elasticsearch 
