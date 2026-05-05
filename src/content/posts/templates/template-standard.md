---
title: <% tp.system.prompt("请输入标题") %>
published: <% tp.date.now("YYYY-MM-DD") %>
description: <% tp.system.prompt("请输入概述") %>
image: ""
tags:
category:
draft: false
lang: ""
---

<% tp.file.cursor() %>
