# 💫 How to Deploy

The site is at the moment deployed on a free personal account of [ZEIT Now](https://zeit.co/docs).

You can always see the latest "production" version that has been pushed to the Github repository here: [https://ekgf-site.now.sh/](https://ekgf-site.now.sh/).

The dashboard can be seen here: [https://zeit.co/ekgf/ekgf-site](https://zeit.co/ekgf/ekgf-site)


## How to deploy on ZEIT Now

As long as we don't have a paid account for ZEIT we can't link our organization git repo to them which would make it all automatic.
Their free account only supports personal github accounts.

So, in order to be able to deploy you have to have a ZEIT account, that
account has to be added to the EKGF team and you have to have the
CLI installed (see [Install Development Tools](./install-development-tools.md)).

For a deploy of whatever you have running locally to a temporary URL that looks like https://ekgf-site-ncpdyq09r.now.sh/ you can just execute the `now` command:

```shell
cd ~/Work/ekgf-site/
now
```

For a "production" deploy that shows up as https://ekgf-site.now.sh/:

```shell
cd ~/Work/ekgf-site/
now --prod
```

---

- [Home](../README.md)
