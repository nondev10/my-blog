---
title: 【即将到来】初中数学概念与理论之集合
published: 2025-10-26
description: 由互联网摘取之若干初中数学概念与理论
image: ""
tags:
  - 数学
  - 定理
category: 笔记
draft: false
lang: ""
---
# 数学知识点整理

## 一、有理数的分类

### (1) 按数的“整分性”分类

有理数
$$
\left\{
\begin{array}{l}
\text{整数} \\
\text{分数} 
\end{array}
\right.
$$

其中：
- 整数 $$ \left\{\begin{array}{l} \text{正整数} \\ 0 \\ \text{负整数} \end{array}\right. $$
- 分数 $$ \left\{\begin{array}{l} \text{正分数} \\ \text{负分数} \end{array}\right. $$

### (2) 按数的“正负性”分类

有理数 $$ \left\{\begin{array}{l} \text{正有理数} \\ 0 \\ \text{负有理数} \end{array}\right. $$

其中：
- 正有理数 $$ \left\{\begin{array}{l} \text{正整数} \\ \text{正分数} \end{array}\right. $$
- 负有理数 $$ \left\{\begin{array}{l} \text{负整数} \\ \text{负分数} \end{array}\right. $$

---

## 二、绝对值

绝对值的代数定义：
$$
|a| = \left\{\begin{array}{ll}
a & (a > 0) \\
0 & (a = 0) \\
-a & (a < 0)
\end{array}\right.
$$

---

## 三、图形的认识

### 直线、射线、线段之间的区别

<table style="width:100%; border-collapse: collapse; text-align: center;">
  <thead>
    <tr style="background-color: #4CAF50; color: white;">
      <th style="border: 1px solid #ddd; padding: 10px;"></th>
      <th style="border: 1px solid #ddd; padding: 10px;">直线</th>
      <th style="border: 1px solid #ddd; padding: 10px;">射线</th>
      <th style="border: 1px solid #ddd; padding: 10px;">线段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">图形</td>
      <td style="border: 1px solid #ddd; padding: 10px;">
        <div style="position: relative; width: 120px; height: 40px; margin: 0 auto;">
          <div style="position: absolute; top: 20px; left: 0; width: 100px; height: 2px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 0; width: 4px; height: 6px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 96px; width: 4px; height: 6px; background: black;"></div>
          <div style="position: absolute; top: 30px; left: 0; font-size: 12px;">A</div>
          <div style="position: absolute; top: 30px; left: 96px; font-size: 12px;">B</div>
        </div>
      </td>
      <td style="border: 1px solid #ddd; padding: 10px;">
        <div style="position: relative; width: 120px; height: 40px; margin: 0 auto;">
          <div style="position: absolute; top: 20px; left: 0; width: 100px; height: 2px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 0; width: 4px; height: 6px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 96px; width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 8px solid black;"></div>
          <div style="position: absolute; top: 30px; left: 0; font-size: 12px;">A</div>
          <div style="position: absolute; top: 30px; left: 96px; font-size: 12px;">B</div>
        </div>
      </td>
      <td style="border: 1px solid #ddd; padding: 10px;">
        <div style="position: relative; width: 120px; height: 40px; margin: 0 auto;">
          <div style="position: absolute; top: 20px; left: 0; width: 100px; height: 2px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 0; width: 4px; height: 6px; background: black;"></div>
          <div style="position: absolute; top: 18px; left: 96px; width: 4px; height: 6px; background: black;"></div>
          <div style="position: absolute; top: 30px; left: 0; font-size: 12px;">A</div>
          <div style="position: absolute; top: 30px; left: 96px; font-size: 12px;">B</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">表示方法</td>
      <td style="border: 1px solid #ddd; padding: 10px;">直线 $AB$ 或直线 $l$</td>
      <td style="border: 1px solid #ddd; padding: 10px;">射线 $AB$ 或射线 $l$</td>
      <td style="border: 1px solid #ddd; padding: 10px;">线段 $AB$ 或线段 $l$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">端点个数</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0 个</td>
      <td style="border: 1px solid #ddd; padding: 10px;">1 个</td>
      <td style="border: 1px solid #ddd; padding: 10px;">2 个</td>
    </tr>
  </tbody>
</table>


$$\begin{align}
& \because \left(\forall n \in 2\mathbb{N},n>2\right) \exists n=p+q : p,q \in \mathbb{P} \\
& \therefore \left(\forall n \in 2\mathbb{N},n>2\right) \exists n=p+(n-p) : p,(n-p) \in \mathbb{P} \\
& \because \mathbb{P}\in\mathbb{N} , \mathbb{P}_{\text{min}}=2 \\
& \therefore \left(n \in 2\mathbb{N},n>2,p\in\mathbb{N},p\geq 2\right) n \to p+(n-p) \,\exists p,(n-p)\in\mathbb{P} \\
\end{align}$$