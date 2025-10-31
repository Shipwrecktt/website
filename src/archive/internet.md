---
layout: layout
title: Linux Archive
---

{% macro tagList(tagName) %}
  {% for post in collections.all %}
    {% set tags = post.data.tags %}
    {% if tags and tags.push is defined and tagName in tags %}
        <span class="post-date">{{ post.date | dateFormat("dd-MM-yyyy") }}</span>
        — <a href="{{ post.url }}">{{ post.data.title }}</a>
    {% endif %}
  {% endfor %}
{% endmacro %}

# Linux archive

## How to stay safe Online
{{ tagList("safe") }}

## The internet you never see (Darknet)
{{ tagList("dark") }}


