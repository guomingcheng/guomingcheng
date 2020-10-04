## Tps 与 Qps
#### <div class="biaoti2"></div> 这是数据库每秒处理事务与查询重要的概念

> <span style='font-size: 13px'> <span class="lan">Tps:</span> Transactions Per Seecond (每秒处理传输的事务地个数)，这是指服务器每秒处理的事务数，支持事务的存储引擎如 lnnoDB 等特有的一个性能指标</span>
>> <span style='font-size: 13px'> <span class="lan">得出 Tps 的算法:</span> (事务的个数 + 回滚的个数) / 执行时间 = Tps </span>

> <span style='font-size: 13px'> <span class="lan">Qps:</span> Quenes Per Second (每秒处理查询的量数) ，这同时适用于 lnnoDB 和 MylSAM 引擎</span>
>> <span style='font-size: 13px'> <span class="lan">得出 Qps 的算法:</span> 查询的量数  / 执行时间 = Qps </span>

## mysqlslap 测试
#### <div class="biaoti2"></div> mysql 自带的 mysqlslap 压力并发测试工具
> <span style='font-size: 13px'> <span class="lan">mysqlslap</span> 是从 mysql-5.1.4 以上版本官方自带的压力测试，自会创建数据库、表、字段，模拟多个客户端并发，当测试完后会自动删除及断开连接。下面是 <span class="lan">mysqlslap</span> 命令提供的参数以及作用: </span>

<div style='font-size: 12px'>

| 参数名       | 值类型         |  作用 
| ------------- |:------------- |:-------------:| 
| --create-schema     | string |  指定测试的数据库名称，默认的是 mysqlslap
| --engine   | string      | 创建测试表使用的存储引擎，可指定多个与 ，逗号分隔
| --concurrency    |  int | 模拟 N 个客户端并发执行，可指定多个值与 ，逗号分隔
| --number-of-queries | int  |  总测试查询的次数(并发客户端数 * 客户端查询的次数 = 总测试数)
| --iterations   | int      | 迭代执行的次数，就是相同的次数进行 N 次，求一个平均值。指的是整个步骤的重复次数，包括准备数据、测试、清理
| --commit   | int      | 执行 N 条 DML 后提交一次
| --auto-generate-sql, -a   |    | 自动生成测试表和数据，表示用 msqlslap 工具自己生成 sql 脚本来测试并发压力
| --auto-generate-sql-load-tryp   | string      | 表示测试环境是读操作还是写操作还是俩者混合的，取值有: read(读)、write(写)、mixed 默认值(读写)
| --auto-generate-sql-add-auto-increment   |       | 对生成的表自动添加自增的列
| --number-char-cols   | int      | 自动生成的测试表中包含 N 个字符类型的列，默认是 1
| --number-int-cols   | int      | 自动生成的测试表中包含 N 个数字类型的列，默认是 1
| --debug-info   |     | 打印内存和 CPU 的信息

</div>


![An image](/img/java/数据库/mysql/mysql-01.png)
<br>
<br>
![An image](/img/java/数据库/mysql/mysql-01.png)
<br>
<br>