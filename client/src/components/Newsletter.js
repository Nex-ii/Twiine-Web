import React, { Component } from 'react'
import '../styles/components/Newsletter.scss'

/** 
 * <!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}

    </style>
    <div id="mc_embed_signup">
    <form action="https://twiine.us17.list-manage.com/subscribe/post?u=54ae79bc17e096182097a1a40&amp;id=55aaa2243f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <label for="mce-EMAIL">Subscribe</label>
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_54ae79bc17e096182097a1a40_55aaa2243f" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>

    <!--End mc_embed_signup--></div>
 * 
*/
    

export default class Newsletter extends Component {
    render() {
        return (
            <div className = 'Newsletter_wrapper'>
                <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
                <div className="mc_embed_signup">
                    <form action="https://twiine.us17.list-manage.com/subscribe/post?u=54ae79bc17e096182097a1a40&amp;id=55aaa2243f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL">Subscribe</label>
                            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
