# ts
ts + webapck 构建项目尝试
问题记录 以及项目变更记录 每一次提交中有对应的变更以及解决的问题
1 打开配置完项目 npm start 发现 http://localhost:8080/ 出现了 listing directory
 仔细排查发现packjson 中的 start 里面config 拼写错误，然后再次启动报错，根据错误提示修改了wepack.base.config.js 中的babel-loader改成 ts-loader，项目可以成功运行