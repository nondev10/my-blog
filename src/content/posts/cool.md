---
title: Cool! Markdown!
published: 2024-04-10
description: How code blocks look in Markdown using Expressive Code.
tags: [Markdown, Blogging, Demo]
category: Examples
draft: false
---


# Class.001 中华人民共和国成立 (#C-001)

## I. 中国人民政治协商会议

| 时间  | 地点  | 事件  |
| --- | --- | --- |
| 1949年9月 | 北平  | 通过了《中国人民政治协商会议共同纲领》 |

| 地位  | 职能  | 意义  |
| --- | --- | --- |
| 起临时宪法作用 | 暂时代行将来召开的全国人民代表大会职权 | 1.初步建立了中国共产党领导的多党合作和政治协商制度<br>2. 为新中国的成立做了重要的准备 |

时间：1949年9月

地点：北平

事件：通过了《中华人民共和国政治协商会议共同纲领》

地位：起临时宪法的作用

职能：暂时代行将来召开的人民代表大会的职权

意义：

1. 初步建立了中国共产党领导的多党合作和政治协商制度
  
  <div class="mark"></div>
  
2. 为新中国的成立做了重要准备
  
  <div class="mark"></div>
  
## II. 新中国成立

事件：开国大典

时间：1949年10月1日

标志：中华人民共和国成立

意义：

- 国内
  
1. 开辟了中国历史的新纪元
  
  <div class="mark"></div>
  
2. 中国人民经过一百多年的英勇斗争，终于推翻了帝国主义、封建主义和官僚资本主义的统治
  
  <div class="mark"></div>
  
3. 中国真正成为独立自主的国家，中国人从此站起来了
  
  <div class="mark"></div>
  
- 国际
  
  新中国成立，壮大了世界和平民主和社会主义的力量
  
  <div class="mark"></div>
  
## III. 西藏和平解放（★在政治上巩固新中国）

时间：1951年

西藏地方政府代表：阿沛·阿旺晋美

结果：西藏和平解放

意义：祖国大陆获得统一，各族人民实现了大团结

<style>
p {
    margin-bottom: 0.25rem
}
h2 {
    animation: FadeIn 5s
}
.mark {
    width:100%;
    height:20px;
    z-index:0;
    background:#000000;
    opacity:1;
    margin-top:-35px;
    animation: Long 5s
}
@keyframes FadeIn {
    from {opacity:0;margin-top:10px}
    to {opacity:1}
}
@keyframes Long {
    from {width:0}
    to {width:1}
}
</style>

::github{repo='noncoder10/Website'}

:::tip
a
:::

:::note
b
:::

:::important
c
:::

:::caution
d
:::

:::warning
e
:::

> [!NOTE]
> Hi!

<div style="background-color: black">
Hi!
</div>

\<div style="background-color: black">
Hi!
\</div>

/<div style="background-color: black">
Hi!
/</div>

<input id="pass" style="background-color:grey">
<button onclick="Hi()" style="background-color:grey">Hahaha~</button>
<div id="wow">Loading……</div>
<script>
  function Hi() {
    console.log("pass");
    const text = document.getElementById("pass").value;
    const El = document.getElementById("wow");
    El.innerHTML = `Hi~${text}`;
  }
</script>
<input id="nam" style="background-color:cyan">
<button onclick="hello()" style="background-color:cyan">Hahaha~</button>
<div id="tar">Loading……</div>
<script>
  function hello() {
    console.log("nam");
    const text = document.getElementById("nam").value;
    const El = document.getElementById("tar");
    El.innerText = `Hi~${text}`;
  }
</script>