
## 简介
#### <div class="biaoti2"></div> mybatis-plus 是对于 mybtias 增强孕育而生的
> <span id='gonglian' style='font-size: 13px'>  mybatis 虽然是一个优秀的 ROM 框架，但简单 CRUD 与 分页等等基础功能，使得开发员人重复着简单的工作。而 mybatisPuls 只是对 mybatis 增强而出现，能替我们完成这些简单工作。</span>
>> MP 是不会影响 mybatis 的原生功能，只是对于 mybatis 做了一层增强，也是可以使用 mybatis 的功能，也可以使用 MP 提供方便的 API 或者分页功能等等优秀的。。。</span>

## 快速入门
#### <div class="biaoti2"></div> MP 一个简单的列子

> <span id='gonglian' style='font-size: 13px'>1、开发环境</span>
>> <span  style='font-size: 13px'>idea 、 jdk8 、 maven、 springboot 、mybatis 、lombok、mysql 数据库表准备好</span>

> <span id='gonglian' style='font-size: 13px'>2、添加相关 jar </span>
>> <span  style='font-size: 13px'>在 springboot 项目中整合，mybatis-plus 使用的是启动器的 jar</span>
>>``` xml
>>
>> <dependencies>
>>       <dependency>
>>           <groupId>org.springframework.boot</groupId>
>>           <artifactId>spring-boot-starter-web</artifactId>
>>       </dependency>
>>       <dependency>
>>           <groupId>org.mybatis.spring.boot</groupId>
>>           <artifactId>mybatis-spring-boot-starter</artifactId>
>>           <version>2.1.0</version>
>>       </dependency>
>>
>>       <dependency>
>>           <groupId>org.projectlombok</groupId>
>>           <artifactId>lombok</artifactId>
>>           <optional>true</optional>
>>       </dependency>
>>       <dependency>
>>           <groupId>org.springframework.boot</groupId>
>>           <artifactId>spring-boot-starter-test</artifactId>
>>           <scope>test</scope>
>>       </dependency>
>>
>>       <!-- mybatis-plus 的启动器 -->
>>       <dependency>
>>           <groupId>com.baomidou</groupId>
>>           <artifactId>mybatis-plus-boot-starter</artifactId>
>>           <version>3.1.0</version>
>>       </dependency>
>>
>>       <dependency>
>>           <groupId>mysql</groupId>
>>           <artifactId>mysql-connector-java</artifactId>
>>           <version>8.0.11</version>
>>       </dependency>
>>
>>       <dependency>
>>           <groupId>com.alibaba</groupId>
>>           <artifactId>druid</artifactId>
>>           <version>1.1.16</version>
>>       </dependency>
>>
>>   </dependencies>
>>
>>
>>```

<br>

> <span id='gonglian' style='font-size: 13px'>3、配置数据库连接  </span>
>``` properties
>spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
>spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
>spring.datasource.url=jdbc:mysql://127.0.0.1:3306/ruiyue?characterEncoding=utf-8&serverTimezone=GMT%2B8&useSSL=false
>spring.datasource.username=root
>spring.datasource.password=root
>```

<br>

> <span id='gonglian' style='font-size: 13px'>4、继承 BaseMapper 接口  </span>
>> <span  style='font-size: 13px'>我们的 mapper 接口需要继承 BaseMapper 接口，在到 springboot 启动类上使用 @MapperScan("com.mapper") 扫描 mapper 接口就可以实现 CRUD 的操作了。</span>
>>``` java
>>/**
>> * @program:
>> * @Date: 2019/9/8 0008 15:28
>> * @Author: guoMingCheng
>> * @Description:
>> */
>>public interface UserMapper extends BaseMapper<User> {
>>}
>>
>>``` 

## 注解
#### <div class="biaoti2"></div>  MP 默认规则产生的问题
> <span  style='font-size: 13px'>1、在 MP 中操作 CRUD 时，对于表名与字段名都是以实体类的驼峰命名法转换成下划线形式执行 sql 的。<br>2、MP 默认的主键字段名是 id, 如果当前表的主键名不是 id 的话，那么执行不成功的。<br>3、在执行 insert 操作时，如实体类某个字段为 null，MP 是不会将为 null 的字段添加到 sql 语句中。</span>
#### <div class="biaoti2"></div> 接下来的注解就是解决这些默认不匹配的问题。 

| 注解        | 使用场景|
| ------------- |:-------------:|
|  @TableName()    | 当一个实体类名与表名不符合 MP 的转换规则或者名称不一致时, 使用该注解在类上，MP 根据该注解的值作为表名|
|     @TableId      | 当一个表的主键不是 ID 时，使用该注解在主键字段上，就可以改变 MP 的默认规则了      |
|     @TableField() | 该注解标记在普通的字段上，MP 会根据该注解的值作为当前列的名称      |
|   @TableField(exist = false)| 当要排除实体类中的某个字段，不让它加入 sql 语句中，就使用该注解，默认时是 true 表示表中有该字段，false 就取反     |

## 查询
#### <div class="biaoti2"></div>  MP 提供了基本查询接口，与优秀的条件构造类

> <span id='gonglian'> 1、普通查询接口 </span> <br>
>> 这些接口都是 Mapper 继承与 BaseMapper 接口，所得来的基本查询接口。delete 接口是与 select 接口的用法都是一样的
>> ``` java
>> userMapper.selectById();   //根据主键的 id，查询一条数据 
>> userMapper.selectBatchIds();  //参数是一个 List 集合的主键 id, 根据集合的 id 查询出一个数组
>> userMapper.selectByMap();  //参数是一个 Map, 每个键对应的是表的列名, 多个哈希值用 and 连接条件查询
>>```    

<br>

> <span id='gonglian'>2、条件构造查询 </span> <br>
>> 条件构造查询是，MP 提供一个 QueryWrapper<> 泛型类，用该类构造出一个查询条件，然后在把该对象传入 userMapper.selectList(queryWrapper) 后就可以了。
>>``` java
>>   @Test
>>    public void Wrapper(){
>>        QueryWrapper<MpUser> queryWrapper = new QueryWrapper<MpUser>();
>>        queryWrapper.like( "name", "明城").le("id" , 2L);
>>        
>>        List list = userMapper.selectList(queryWrapper);
>>        list.forEach(System.out::println);
>>    }
>>```

<br>

> <span id='gonglian'>3、查询排除不需要的列 </span> <br>
>> 在一些查询语句中，只想查询某些列, 那么就需要使用下面的 select() 方法，该方法可以设置值查询的列，或者排除那些列。
>>```java
>>  @Test
>>    public void Wrapper(){
>>        QueryWrapper<MpUser> queryWrapper = new QueryWrapper<MpUser>();
>>        //select : 查询只包含 id、name 俩个字段
>>        queryWrapper.select("id", "name").like( "name", "明城");
>>
>>        // 这条注释的，是在查询中排除某些字段，这个是排除 name 字段，如要多个就用 && 相连
>>        //.select(MpUser.class, info -> !info.getColumn().equals("name"))
>>        List list = userMapper.selectList(queryWrapper);
>>        list.forEach(System.out::println);
>>    }
>>```

<br>

> <span id='gonglian'>4、构造器参数实体类 </span> <br>
>> 把一个实体类的实列传入到 QueryWrapper 构造器中，他会根据实体类中不为 null 的值构建条件，但构建出的条件都是 = 等号条件多个以 and 连接，如有需要改变条件要使用  @TableField(condition = SqlCondition.LIKE) 这个，贴在属性上，值就是这个属性条件符号
>>``` java
>>   @Test
>>   public void Wrapper(){
>>       MpUser user = new MpUser();
>>       QueryWrapper<MpUser> queryWrapper = new QueryWrapper<MpUser>(user);
>>
>>       List list = userMapper.selectList(queryWrapper);
>>       list.forEach(System.out::println);
>>   }
>>```
<br>

> <span id='gonglian'>5、lambda 语法条件构造查询 </span> <br>
>> lambda 的语法构造也是构造出一个 sql 条件查询语句，他唯一比普通的条件构造的好处是，他编写列名时会受到编译器检查，这样也是避免错误
>>``` java
>>   @Test
>>   public void selectLambda(){
>>       LambdaQueryWrapper<MpUser> lambda = new LambdaQueryWrapper<MpUser>();
>>       // MpUser::getName 相当于列名 name, 这就是 lambda 语法
>>       lambda.like(MpUser::getName, "明城");
>>
>>       List<MpUser> mpUsers = userMapper.selectList(lambda);
>>       mpUsers.forEach(System.out::println);
>>   }
>>
>>```

<br>

## 原生结合 MP 
#### <div class="biaoti2"></div> MP 提供原生结合 Wrapper 开发

> <span id='gonglian'>有时想使用原生的编写 xml 的方式调用，但要想要 MP 优秀的条件构造器。这个 MP 也提供了支持，但需要在 3.0.7 以上的版本才可以使用。</span>

> <span id='gonglian'>1、扫描 xml 文件</span>
>>需要在 springboot 的核心配置文件中添加下面的配置, 也就是扫描 xml文件。
>>``` java
>>mybatis-plus.mapper-locations= classpath:mybatis/*.xml
>>```

> <span id='gonglian'>2、参数是条件构造类</span>
>>参数要设置的是条件构造类，Constants 常量对象表示该泛型对什么类型，可以进入查看，有中文注释。只要把构造好的对象传进来就可以了，
>>``` java
>>public interface UserMapper extends BaseMapper<MpUser> {
>>    List<MpUser> selectList2(@Param(Constants.WRAPPER) Wrapper<MpUser> wrapper);
>>}
>>```

> <span id='gonglian'>3、取值</span>
>>ew是Constants.WRAPPER 的常量，那些 where 逻辑条件构造会自行处理。
>>``` xml
>>   <select id="selectList2" resultType="com.guomingcheng.mybatisplus.pojo.MpUser">
>>        select * from user ${ew.customSqlSegment}
>>    </select>
>>```

## 分页
#### <div class="biaoti2"></div>  分页的 MP 解决方案
> <span id='gonglian'>1、在配置文件注册 bean</span>
>> 只需要把 PaginationInterceptor 类注册到 IOC 中，就可以使用分页插件了
>>``` java
>>@Configuration
>>public class MybatisConfig {
>>    @Bean(value = "paginationInterceptor")
>>    public PaginationInterceptor getPaginationInterceptor(){
>>        return new PaginationInterceptor();
>>    }
>>}
>>```

> <span id='gonglian'>2、使用分页插件</span>
>> 需要通过 page 类来设置第几页与页数，通多第三个参数设置是否执行查询总数的 sql。返回的 Ipage 实列可以获取到分页的数据需要的数据: [Total : 数据总数] [Pages : 总页数] [Size : 一页总数] [Current : 第几页] [Records : 分页数据]
>>``` java
>>    @Test
>>    public void selectPage(){
>>        LambdaQueryWrapper<MpUser> queryWrapper = new LambdaQueryWrapper<>();
>>        Page<MpUser> page = new Page<>(1, 3, true); // 第几页、页总数、是否执行查询数据的总数
>>                                    //selectMapsPage 方法也是分页的，不过每条数据都是以一个 Map 装起来
>>        IPage<MpUser> mpUserIPage = userMapper.selectPage(page, queryWrapper);
>>        List<MpUser> records = mpUserIPage.getRecords();  //数据
>>        records.forEach(System.out::println);
>>    }
>>```

#### <div class="biaoti2"></div>  多表联查分页的 MP 解决方案
> <span id='gonglian'>MP 提供的分页只是针对于单表的分页，对于多表查询的分页是不支持的。但是业务需要多表操作查询，要想分页的时候，就需要通过原生与 MP 组合形式开发，就可以实现多表分页操作。</span>

> <span id='gonglian'>1、编写 Mapper 接口</span>
>> 接口的编写要注意: 第一个参数一定要是 Page 对象，MP 才可以实现分页操作。返回值依然是 IPage 类型的
>>``` java
>>public interface UserMapper extends BaseMapper<MpUser> {
>>    IPage<UserStage> selectUserPage(Page<MpUser> page, @Param(Constants.WRAPPER)Wrapper<MpUser> wrapper);
>>}
>>```

> <span id='gonglian'>2、编写多表 sql</span>
>> 在 xml 文件中，我们就以多表 sql 的形式编写就行，MP 会帮我们做分页的。但有一点要注意的是: resultType 字段的 Date 类型是映射不成功的，需要使用 resultMap 指明才可以.
>>``` xml
>>  <select id="selectUserPage" resultMap="userStage">
>>        SELECT * FROM `user`  INNER JOIN `stage` ON user.`id`=stage.`id` ${ew.customSqlSegment}
>>    </select>
>>```

> <span id='gonglian'>3、调用接口即可</span>
>>``` java
>>    @Test
>>    public void selectByPage(){
>>        LambdaQueryWrapper<MpUser> queryWrapper = new LambdaQueryWrapper<>();
>>        Page<MpUser> page = new Page<>(1, 3, true);
>>
>>        IPage<UserStage> mpUserIPage = userMapper.selectUserPage(page, queryWrapper);
>>        List<UserStage> records = mpUserIPage.getRecords();
>>        records.forEach(System.out::println);
>>    }
>>```

## 更新
#### <div class="biaoti2"></div>  MP 更新解决方案

> <span id='gonglian'>1、根据主键 id 更新</span>
>> 使用 updateById() 方法进行更新操作，它需要一个实体类，根据 id 进行更新的，如果实体类中有些字段为 null 的话，那么为 null 是不会出现在 set 中的。
>>``` java
>> userMapper.updateById(mpUser);
>>```

<br>

> <span id='gonglian'>2、条件构造器更新</span>
>> 我们使用 updateWrapper 来自己构造条，它构造的条件出现在 where 后，只要把实体类与 updateWrapper 传给 update() 方法就行了
>>``` java
>> @Test
>>    public void update(){
>>        UpdateWrapper<MpUser> updateWrapper = new UpdateWrapper<>();
>>        updateWrapper.eq("id", 6L);  //构造条件，多个可以再 eq.
>>        MpUser mpUser = new MpUser();  // 实体，默认属性为 null 的不会出现在 set 中
>>        mpUser.setName("礼言");
>>        int update = userMapper.update(mpUser, updateWrapper);
>>    }
>>```

<br>


> <span id='gonglian'>3、更新少个字段的做法</span>
>> 以上都是创建一个实体类来更新，但是有时只要更新一个字段或者俩个字段，这样在创建实体类就不划算。这做法 MP 也提供了，如下:
>>``` java
>>  @Test
>>    public void update(){
>>        UpdateWrapper<MpUser> updateWrapper = new UpdateWrapper<>();
>>        updateWrapper.eq("id", 6L).set("age", 20);//在 set 中设值，会出现在 set 中，多个可以多个 set 值
>>
>>        userMapper.update(null , updateWrapper);
>>    }
>>```

## 主键策略
#### <div class="biaoti2"></div> 数据库 mysql 与实体类的主键策略同步
> <span id='gonglian'>有时 mysql 要把主键设置成自增或者设置成 string 类型的。我们要在实体类上的主键要与 mysql 同步，不然会带来报错的结果。MP 也提供了类别让我们设置:</span>
>> 局部策略设置: <br>
>><span id='gonglian'> MP 提供类六种主键策略，在 IdType 类中配置，策略的选择可以到该类中看看</span>
>>``` java
>>@Data
>>@TableName(value = "user")
>>public class MpUser {
>>    @TableId(type = IdType.NONE)//设置自增策略，当 insert 时就不会添加 id 的列。一些策略看 IdType 的属性
>>    private Long id;
>>}
>>```
>> 全局策略设置:<br>
>>注意: 局部策略会覆盖掉全局策略的设置，需要在 application.properties 核心配置文件中设置。
>>``` java
>>mybatis-plus.global-config.db-config.id-type=id_worker_str
>>```

## 逻辑删除
#### <div class="biaoti2"></div> MP 提供逻辑删除良好的支持
> <span id='gonglian'>有时我们只需要修改表中的某个字段，进行逻辑删除。在 MP 中提供了解决方案，当你配置好，调用 delete 接口删除时，sql 语句就会是 update 更新那个 delete 字段。当你调用 select 或者 upadte 接口都是默认都加上 delete 那个逻辑字段条件进行验证。但要注意的地方是: 如果在 xml 中编写 sql，那些需要自己添加 delete 字段进行验证。</span>
>> <span id='gonglian'>全局配置逻辑删除:</span><br>
>> 在 MP 默认逻辑删除配置是: 为删除 0 ，以删除是 1 。如果业务需求规定的与默认的不符合，那么就可以可以通过下面的配置进行更改逻辑删除默认配置
>>```js
>>mybatis-plus.global-config.db-config.logic-not-delete-value=0  #未删除是 0
>>mybatis-plus.global-config.db-config.logic-delete-value=1  #以删除是 1
>>```
>><span id='gonglian'> 实体类生效的配置: </span><br>
>> 只有在实体类的 delete 字段上添加 @TableLogic 注解，那么逻辑删除配置才会生效
>>``` java
>>@Data
>>@TableName(value = "user")
>>public class MpUser {
>>    @TableId(type = IdType.NONE)
>>    private Long id;
>>
>>    @TableLogic   //可以通过局部配置 @TableLogic(value = "1", delval = "2") 
>>    @TableField(select = false)   //表示该列不会查询出来
>>    private Integer delete;
>>}
>>```

## 自动填充
#### <div class="biaoti2"></div> 解决了 insert 或者 update 时，一些时间字段，或者随机字段没必要 new 
> <span id='gonglian'>一般我们 insert 时，实体类有些 Date 字段类型，我们可以使用 MP 提供的字段填充接口，而不必要再去 new 对象设置。update 也是一样。这不局限与 Date 类型的字段，这根据业务需求来选择。</span>
>> <span id='gonglian'>实现提供的接口:</span><br>
>> 实现了 MetaObjectHandler 类后，当一些实体类使用自动填充后，每个 Mapper insert 或者 update 都会回调该类的对应的方法。
>>``` java
>>@Component
>>public class MyMetaObjectHandler implements MetaObjectHandler {
>>
>>    @Override//当 insert 时, 回调该方法填充, 也是我们手动填充数据
>>    public void insertFill(MetaObject metaObject) { // metaObject 可以获取当前实体类的信息
>>        
>>        // upperShelfDate 是实体类变量名，参数 2 是赋值给变量的
>>        metaObject.setInsertFieldValByName("upperShelfDate" , new Date(), metaObject);
>>    }
>>
>>    @Override
>>    public void updateFill(MetaObject metaObject) {
>>        Object o = getFieldValByName("lowerShelfDate", metaObject);  //实体类如果设值了，可以在这里取到值，没设则 null
>>        //更新同理
>>        metaObject.setInsertFieldValByName("lowerShelfDate" , new Date(), metaObject);
>>    }
>>}
>>```
>> <span id='gonglian'>使用自动填充:</span><br>
>> 使用 @TableField(fill = FieldFill) 注解贴在属性后，表示开启了自动填充功能，当该实体类的 Mapper 调用 insert 或者 updaet 是，都会去执行 MetaObjectHandler 实例的方法。可在那个方法中为当前属性设置值，FieldFill 有三个可选值，根据业务需求自行选择
>>``` java
>>@lombok.Data
>>@TableName("stage")
>>public class UserStage {
>>    
>>    @TableField(fill = FieldFill.INSERT)
>>    private Date upperShelfDate;
>>
>>    @TableField(fill = FieldFill.UPDATE)
>>    private Date lowerShelfDate;
>>
>>}
>>```