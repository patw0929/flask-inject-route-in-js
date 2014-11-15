import os
import sys

from run import app

def generate_routes_json():
    import json
    rule_map = dict()

    for rule in app.url_map._rules:
        if rule.endpoint not in rule_map:
            rule_map[rule.endpoint] = rule.rule

    with open('routes.json', 'w') as outfile:
        json.dump(rule_map, outfile)
