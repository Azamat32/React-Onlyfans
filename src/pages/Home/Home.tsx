import React from 'react';

import Image from '@ui/Components/Image/Image';

import Sidebar from '@ui/Components/Sidebar/Sidebar';
import './HomePage.scss';

const Home = () => {
  return (
    <>
      <div className="modal ">
        <div className="modal_inner">
          <div className="modal_close">
            <Image path="close.svg" />
          </div>
          <div className="modal_adaptive_box adaptive_pad">
            <div className="home_main_item without_border_top">
              <div className="home_main_item_header">
                <div className="main_item_header_content">
                  <div className="main_item_header_title">
                    <div className="main_item_header_title_image">
                      <Image path="avatar1.png" />
                    </div>

                    <div className="main_item_header_nickname">
                      <h3>
                        Arlene McCoy <Image path="verified.svg" />
                      </h3>
                      <p>@ticklishkoala607</p>
                    </div>
                  </div>
                  <div className="main_item_header_subtitles">
                    <p>1h</p>
                    <a className="copy_link" href="#">
                      <Image path="link.svg" />
                    </a>
                    <div className="link_box">
                      <p>Link copied</p>
                    </div>
                  </div>
                </div>
                <div className="main_item_header_text">
                  <p>
                    Hey VIP Tier~ Are you ready for a taste of the darkness?
                    This weeks top tier videos are a DC classNameic- Raven! I
                    hope you guys enjoy the flair for the dramatic, and how we
                    really turn up the heat in this one ;) Sure, the Diamond
                    Tier video is greeat, but stripping out of the costume is
                    when…
                  </p>
                  <a href="#">Show more</a>
                </div>
              </div>
              <div className="main_item_video">
                <Image path="actress.png" />
                <span>
                  <Image path="player.svg" alt="" />
                </span>
              </div>
              <div className="main_item_video_reaction">
                <div className="main_item_video_reaction_text">
                  <Image path=" heart.svg" />

                  <span>787</span>
                </div>
                <div className="main_item_video_reaction_text">
                  <Image path="comment.svg" />

                  <span>65</span>
                </div>
              </div>
              <div className="main_item_comment ">
                <div className="main_item_comment_inner">
                  <div className="modal_input">
                    <div className="modal_input_wrap">
                      <textarea
                        placeholder="Add a comment"
                        name=""
                        id=""
                        cols={30}
                        rows={2}
                      ></textarea>
                    </div>
                    <div className="modal_btn">
                      <a href="#">
                        <Image path="send.svg" />
                      </a>
                    </div>
                  </div>
                  <div className="modal_right">
                    <div className="modal_right_inner">
                      <div className="model_right_content">
                        <div className="model_right_content_item_tree ">
                          <div className="model_right_content_tree_item  ">
                            <div className="model_right_content_item_flex">
                              <div
                                style={{
                                  background: `url(avatar1.png)`,
                                }}
                                className="model_right_content_item_avatar after_item"
                              >
                                <Image path="avatar1.png" />
                              </div>
                              <div className="model_right_content_item_text">
                                <p>
                                  <b>Arlene McCoy</b> All messages that come
                                  through with TIPS will always be a TOP
                                  priority
                                </p>
                              </div>
                            </div>
                            <div className="model_right_content_item_footer">
                              <div className="model_right_day">
                                <span>1 d</span>
                                <a href="#">Reply</a>
                              </div>
                              <div className="model_right_likes">
                                <div className="reaction_hover">
                                  <Image path="heart_little.svg" />
                                </div>
                                <span>323</span>
                              </div>
                            </div>
                          </div>
                          <div className="separete">
                            <Image path="separate.svg" />

                            <p>Hide replies (2)</p>
                          </div>
                          <div className="model_right_content_tree_item_footer  ">
                            <div className="model_right_content_item_flex">
                              <div
                                style={{
                                  background: `url(man6.png)`,
                                }}
                                className="model_right_content_item_avatar after_item"
                              >
                                <Image path="man6.png" />
                              </div>
                              <div className="model_right_content_item_text">
                                <p>
                                  <b>Arlene McCoy</b> All messages that come
                                  through with TIPS will always be a TOP
                                  priority
                                </p>
                              </div>
                            </div>
                            <div className="model_right_content_item_footer">
                              <div className="model_right_day">
                                <span>1 d</span>
                                <a href="#">Reply</a>
                              </div>
                              <div className="model_right_likes">
                                <div className="reaction_hover">
                                  <Image path="heart_little.svg" />
                                </div>
                                <span>323</span>
                              </div>
                            </div>
                          </div>
                          <div className="model_right_content_tree_item_footer  ">
                            <div className="model_right_content_item_flex">
                              <div
                                style={{
                                  background: `url(man7.png)`,
                                }}
                                className="model_right_content_item_avatar after_item"
                              >
                                <Image path="man7.png" />
                              </div>
                              <div className="model_right_content_item_text">
                                <p>
                                  <b>Arlene McCoy</b> All messages that come
                                  through with TIPS will always be a TOP
                                  priority
                                </p>
                              </div>
                            </div>
                            <div className="model_right_content_item_footer">
                              <div className="model_right_day">
                                <span>1 d</span>
                                <a href="#">Reply</a>
                              </div>
                              <div className="model_right_likes">
                                <div className="reaction_hover">
                                  <Image path="heart_little.svg" />
                                </div>
                                <span>323</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal_box not_adaptivetab">
            <div className="modal_left">
              <div className="modal_left_banner">
                <Image path="actress.png" />
                <div className="modal_left_banner_player">
                  <div className="modal_left_banner_player_blur">
                    <Image path="Polygon 1.svg" />
                  </div>
                </div>
                <div className="modal_left_banner_navigation">
                  <div className="modal_left_banner_navigation_left">
                    <div className="mine_message_user_item_svg">
                      <Image path="lineLeft.svg" />
                    </div>
                  </div>
                  <div className="modal_left_banner_navigation_right">
                    <div className="mine_message_user_item_svg">
                      <Image path="lineRight.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal_right">
              <div className="modal_right_inner">
                <div className="model_right_header">
                  <div className="subscribers_item">
                    <div className="main_item_header_title">
                      <div
                        style={{
                          background: `url(avatar4.png)`,
                        }}
                        className="main_item_header_title_image"
                      >
                        <Image path="avatar4.png" />
                      </div>

                      <div className="main_item_header_nickname">
                        <h3>
                          Theresa Webb
                          <Image path="verified.svg" />
                        </h3>
                        <p>@ticklishkoala607</p>
                      </div>
                    </div>
                    <div className="subscribers_item_btn">
                      <a href="#">
                        <span>Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="model_right_content">
                  <div className="model_right_content_item ">
                    <div
                      style={{
                        background: `url(avatar4.png)`,
                      }}
                      className="model_right_content_item_avatar after_item"
                    >
                      <Image path="avatar4.png" />
                    </div>
                    <div className="model_right_content_item_text">
                      <p>
                        <b>Theresa Webb</b> It’s so important to try new things!
                        My new favorite thing is rollerblading around a lake
                        especially when the weather is nice! 💗 I’m afraid to
                        fall especially since I’m still new at it, but
                        conquering the fear of failure is part of trying new
                        things!
                      </p>
                    </div>
                  </div>
                  <div className="model_right_content_item_tree ">
                    <div className="model_right_content_tree_item  ">
                      <div className="model_right_content_item_flex">
                        <div
                          style={{
                            background: `url(avatar1.png)`,
                          }}
                          className="model_right_content_item_avatar after_item"
                        >
                          <Image path="avatar1.png" alt="" />
                        </div>
                        <div className="model_right_content_item_text">
                          <p>
                            <b>Arlene McCoy</b> All messages that come through
                            with TIPS will always be a TOP priority
                          </p>
                        </div>
                      </div>
                      <div className="model_right_content_item_footer">
                        <div className="model_right_day">
                          <span>1 d</span>
                          <a href="#">Reply</a>
                        </div>
                        <div className="model_right_likes">
                          <Image path="heart_little.svg" />
                          <span>323</span>
                        </div>
                      </div>
                    </div>
                    <div className="separete">
                      <Image path="separate.svg" />

                      <p>Hide replies (2)</p>
                    </div>
                    <div className="model_right_content_tree_item_footer  ">
                      <div className="model_right_content_item_flex">
                        <div
                          style={{
                            background: `url(man6.png)`,
                          }}
                          className="model_right_content_item_avatar after_item"
                        >
                          <Image path="man6.png" alt="" />
                        </div>
                        <div className="model_right_content_item_text">
                          <p>
                            <b>Arlene McCoy</b> All messages that come through
                            with TIPS will always be a TOP priority
                          </p>
                        </div>
                      </div>
                      <div className="model_right_content_item_footer">
                        <div className="model_right_day">
                          <span>1 d</span>
                          <a href="#">Reply</a>
                        </div>
                        <div className="model_right_likes">
                          <Image path="heart_little.svg" />
                          <span>323</span>
                        </div>
                      </div>
                    </div>
                    <div className="model_right_content_tree_item_footer  ">
                      <div className="model_right_content_item_flex">
                        <div
                          style={{
                            background: `url(man7.png)`,
                          }}
                          className="model_right_content_item_avatar after_item"
                        >
                          <Image path="man7.png" alt="" />
                        </div>
                        <div className="model_right_content_item_text">
                          <p>
                            <b>Arlene McCoy</b> All messages that come through
                            with TIPS will always be a TOP priority
                          </p>
                        </div>
                      </div>
                      <div className="model_right_content_item_footer">
                        <div className="model_right_day">
                          <span>1 d</span>
                          <a href="#">Reply</a>
                        </div>
                        <div className="model_right_likes">
                          <Image path="heart_little.svg" />
                          <span>323</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal_navigation">
                  <div className="main_item_video_reaction">
                    <div className="main_item_video_reaction_text">
                      <div className="reaction_hover">
                        <Image path=" heart.svg" />
                      </div>

                      <span>787</span>
                    </div>
                    <div className="main_item_video_reaction_text">
                      <div className="comment_hover">
                        <Image path="comment.svg" />
                      </div>

                      <span>65</span>
                    </div>
                  </div>
                  <div className="modal_right_time">
                    <span>1 day ago</span>
                  </div>
                </div>
                <div className="modal_input">
                  <div className="modal_input_wrap">
                    <textarea
                      placeholder="Add a comment"
                      name=""
                      id=""
                      cols={30}
                      rows={2}
                    ></textarea>
                  </div>
                  <div className="modal_btn">
                    <a href="#">Send</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="main_content">
        <div className="container">
            <div className="home_main_content">
              <div className="home_main_inner">
                <div className="home_main_item without_border_top">
                  <div className="home_main_item_header">
                    <div className="main_item_header_content">
                      <div className="main_item_header_title">
                        <div className="main_item_header_title_image">
                          <Image path="avatar1.png" />
                        </div>

                        <div className="main_item_header_nickname">
                          <h3>
                            Arlene McCoy <Image path="verified.svg" />
                          </h3>
                          <p>@ticklishkoala607</p>
                        </div>
                      </div>
                      <div className="main_item_header_subtitles">
                        <p>1h</p>
                        <a className="copy_link" href="#">
                          <Image path="link.svg" />
                        </a>
                        <div className="link_box">
                          <p>Link copied</p>
                        </div>
                      </div>
                    </div>
                    <div className="main_item_header_text">
                      <p>
                        Hey VIP Tier~ Are you ready for a taste of the darkness?
                        This weeks top tier videos are a DC classNameic- Raven!
                        I hope you guys enjoy the flair for the dramatic, and
                        how we really turn up the heat in this one ;) Sure, the
                        Diamond Tier video is greeat, but stripping out of the
                        costume is when…
                      </p>
                      <a href="#">Show more</a>
                    </div>
                  </div>
                  <div className="main_item_video">
                    <Image path="actress.png" />
                    <span>
                      <Image path="player.svg" alt="" />
                    </span>
                  </div>
                  <div className="main_item_video_reaction">
                    <div className="main_item_video_reaction_text">
                      <div className="reaction_hover">
                        <Image path="heart.svg" />
                      </div>

                      <span>787</span>
                    </div>
                    <div
                      id="comment_btn"
                      className="main_item_video_reaction_text"
                    >
                      <div className="comment_hover">
                        <Image path="comment.svg" />
                      </div>
                      <span>65</span>
                    </div>
                  </div>
                  <div className="main_item_comment adaptive">
                    <div className="main_item_comment_inner">
                      <div className="modal_input">
                        <div className="modal_input_wrap">
                          <textarea
                            placeholder="Add a comment"
                            name=""
                            id=""
                            cols={30}
                            rows={2}
                          ></textarea>
                        </div>
                        <div className="modal_btn">
                          <a href="#">
                            <Image path="send.svg" />
                          </a>
                        </div>
                      </div>
                      <div className="modal_right">
                        <div className="modal_right_inner">
                          <div className="model_right_content">
                            <div className="model_right_content_item_tree ">
                              <div className="model_right_content_tree_item  ">
                                <div className="model_right_content_item_flex">
                                  <div
                                    style={{
                                      background: `url(avatar1.png)`,
                                    }}
                                    className="model_right_content_item_avatar after_item"
                                  >
                                    <Image path="avatar1.png" alt="" />
                                  </div>
                                  <div className="model_right_content_item_text">
                                    <p>
                                      <b>Arlene McCoy</b> All messages that come
                                      through with TIPS will always be a TOP
                                      priority
                                    </p>
                                  </div>
                                </div>
                                <div className="model_right_content_item_footer">
                                  <div className="model_right_day">
                                    <span>1 d</span>
                                    <a href="#">Reply</a>
                                  </div>
                                  <div className="model_right_likes">
                                    <div className="reaction_hover">
                                      <Image path="heart_little.svg" />
                                    </div>
                                    <span>323</span>
                                  </div>
                                </div>
                              </div>
                              <div className="separete">
                                <Image path="separate.svg" />
                                <p>Hide replies (2)</p>
                              </div>
                              <div className="model_right_content_tree_item_footer  ">
                                <div className="model_right_content_item_flex">
                                  <div
                                    style={{
                                      background: `url(man6.png)`,
                                    }}
                                    className="model_right_content_item_avatar after_item"
                                  >
                                    <Image path="man6.png" alt="" />
                                  </div>
                                  <div className="model_right_content_item_text">
                                    <p>
                                      <b>Arlene McCoy</b> All messages that come
                                      through with TIPS will always be a TOP
                                      priority
                                    </p>
                                  </div>
                                </div>
                                <div className="model_right_content_item_footer">
                                  <div className="model_right_day">
                                    <span>1 d</span>
                                    <a href="#">Reply</a>
                                  </div>
                                  <div className="model_right_likes">
                                    <div className="reaction_hover">
                                      <Image path="heart_little.svg" />
                                    </div>
                                    <span>323</span>
                                  </div>
                                </div>
                              </div>
                              <div className="model_right_content_tree_item_footer  ">
                                <div className="model_right_content_item_flex">
                                  <div
                                    style={{
                                      background: `url(man7.png)`,
                                    }}
                                    className="model_right_content_item_avatar after_item"
                                  >
                                    <Image path="man7.png" alt="" />
                                  </div>
                                  <div className="model_right_content_item_text">
                                    <p>
                                      <b>Arlene McCoy</b> All messages that come
                                      through with TIPS will always be a TOP
                                      priority
                                    </p>
                                  </div>
                                </div>
                                <div className="model_right_content_item_footer">
                                  <div className="model_right_day">
                                    <span>1 d</span>
                                    <a href="#">Reply</a>
                                  </div>
                                  <div className="model_right_likes">
                                    <div className="reaction_hover">
                                      <Image path="heart_little.svg" />
                                    </div>
                                    <span>323</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home_main_item">
                  <div className="home_main_item_header">
                    <div className="main_item_header_content">
                      <div className="main_item_header_title">
                        <Image path="avatar3.png" alt="" />
                        <div className="main_item_header_nickname">
                          <h3>
                            Cameron Williamson
                            <Image path="verified.svg" alt="" />
                          </h3>
                          <p>@dizzinessextensions</p>
                        </div>
                      </div>
                      <div className="main_item_header_subtitles">
                        <p>Mar 5</p>
                        <a className="comment_hover" href="#">
                          <Image path="link.svg" />
                        </a>
                      </div>
                    </div>
                    <div className="main_item_header_text">
                      <p>A little cosplay, as a treat 🍦</p>
                    </div>
                  </div>
                  <div className="main_item_video blur_filter">
                    <div className="blur_filter_wrap">
                      <Image className="shame" path="shamePhoto.png" alt="" />
                      <div className="blur"></div>
                    </div>

                    <span>
                      <Image path="Lock2.svg" alt="" />
                    </span>
                    <a href="#">Unlock media</a>
                  </div>
                  <div className="main_item_video_reaction">
                    <div className="main_item_video_reaction_text">
                      <div className="reaction_hover">
                        <Image path="heart.svg" />
                      </div>
                      <span>787</span>
                    </div>
                    <div className="main_item_video_reaction_text">
                      <div className="comment_hover">
                        <Image path="comment.svg" />
                      </div>

                      <span>65</span>
                    </div>
                  </div>
                </div>
                <div className="home_main_item">
                  <div className="home_main_item_header">
                    <div className="main_item_header_content">
                      <div className="main_item_header_title">
                        <Image path="avatar 2.svg" alt="" />
                        <div className="main_item_header_nickname">
                          <h3>
                            Arlene McCoy <Image path="verified.svg" alt="" />
                          </h3>
                          <p>@ticklishkoala607</p>
                        </div>
                      </div>
                      <div className="main_item_header_subtitles">
                        <p>Mar 3</p>
                        <a className="copy_link" href="#">
                          <Image path="link.svg" />
                        </a>
                      </div>
                    </div>
                    <div className="main_item_header_text">
                      <p>
                        Trying to dance for you guys while I’m out at a music
                        festival ❤️
                      </p>
                    </div>
                  </div>
                  <div className="main_item_video">
                    <Image path="naked_women.png" alt="" />
                  </div>
                  <div className="main_item_video_reaction">
                    <div className="main_item_video_reaction_text">
                      <div className="reaction_hover">
                        <Image path="heart.svg" />
                      </div>
                      <span>787</span>
                    </div>
                    <div className="main_item_video_reaction_text">
                      <div className="comment_hover">
                        <Image path="comment.svg" />
                      </div>

                      <span>65</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;
